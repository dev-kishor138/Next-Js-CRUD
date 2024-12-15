import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";
import slugify from "slugify";


export async function POST(request) {
    try {
        await connectMongoDB();

        const formData = await request.formData();
        const title = formData.get('title');
        const description = formData.get('description');
        const image = formData.get('image');
        let slug = slugify(title, { lower: true, strict: true });

        const existingCategory = await Category.findOne({ slug });
        if (existingCategory) {
            slug = `${slug}-${Date.now()}`;
        }

        const newCategory = new Category({
            title,
            slug,
            description,
            image: {
                url: image,
                contentType: image.type,
            }
        })
        await newCategory.save();

        return NextResponse.json({ success: true, message: "Category Created" }, { status: 201 })
    } catch (error) {
        console.error('something went wrong when create a category: ', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 400 })
    }
}


export async function GET() {
    try {
        await connectMongoDB();
        const category = await Category.find();
        if (!category) return NextResponse.json({ message: "Data Not Found" }, { status: 404 })
        return NextResponse.json({ category });
    } catch (error) {
        console.error("something Worng: ", error);
        return NextResponse.json({ message: "Internel Server Error" }, { status: 500 })
    }
}
