import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectMongoDB();

        // Extract the FormData from the request
        const formData = await request.formData();
        const file = formData.get('file');
        const title = formData.get('title');
        const description = formData.get('description');

        if (!file || !title || !description) {
            return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
        }

        // Convert file to Buffer
        const bufferData = await file.arrayBuffer();
        const buffer = Buffer.from(bufferData);

        // Create a new blog entry
        const newBlog = new Blog({
            title,
            description,
            image: {
                name: file.name,
                data: buffer,
                contentType: file.type,
            },
        });

        await newBlog.save();

        return NextResponse.json({ success: true, message: "Blog Created" }, { status: 201 });
    } catch (error) {
        console.error("Error uploading blog:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}


export async function GET() {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ blogs })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog Deleted Successfully" }, { status: 200 });
}