import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function PUT(request, { params }) {
    try {
        await connectMongoDB();

        const { slug } = params;
        const category = await Category.findOne({ slug });
        if (!category) {
            return NextResponse.json({ success: false, message: 'Category Not Found' }, { status: 404 })
        }

        const formData = await request.formData();
        const title = formData.get('title');
        const description = formData.get('description');
        const image = formData.get('image');
        let newSlug = slugify(title, { lower: true, strict: true });

        const existingCategory = await Category.findOne({ newSlug });
        if (existingCategory) {
            newSlug = `${newSlug}-${Date.now()}`;
        }

        const updateCategory = await Category.findByIdAndUpdate(category.id, {
            title,
            slug: newSlug,
            description,
            image: {
                url: image,
                contentType: image.type,
            }
        });

        if (!updateCategory) {
            return NextResponse.json({ success: false, message: "Something went Wrong when categoryUpdate" }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Category Updated" }, { status: 201 })
    } catch (error) {
        console.error("something Worng: ", error);
        return NextResponse.json({ message: "Internel Server Error" }, { status: 500 })
    }
}


export async function GET(request, { params }) {
    try {
        await connectMongoDB();
        const { slug } = params;
        const category = await Category.findOne({ slug });
        if (!category) return NextResponse.json({ message: "Data Not Found" }, { status: 404 });
        return NextResponse.json({ category });
    } catch (error) {
        console.error("something Worng: ", error);
        return NextResponse.json({ message: "Internel Server Error" }, { status: 500 })
    }
}

export async function DELETE(request, { params }) {
    try {
        // Connect to MongoDB
        await connectMongoDB();

        // Extract the slug from params
        const { slug } = params;

        // Find and delete the category
        const deletedCategory = await Category.findOneAndDelete({ slug });

        if (!deletedCategory) {
            return NextResponse.json({ message: "Data Not Found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Category Deleted Successfully" }, { status: 200 });
    } catch (error) {
        console.error("Something went wrong: ", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}