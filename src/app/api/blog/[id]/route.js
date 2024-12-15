import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {
        await connectMongoDB();

        // Extract the FormData from the request
        const formData = await request.formData();
        const file = formData.get("file");
        const title = formData.get("title");
        const description = formData.get("description");

        if (!file || !title || !description) {
            return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
        }

        // Convert file to Buffer
        const bufferData = await file.arrayBuffer();
        const buffer = Buffer.from(bufferData);

        const { id } = params;

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
                title,
                description,
                image: {
                    name: file.name,
                    data: buffer,
                    contentType: file.type,
                },
            },
            { new: true }
        );

        if (!updatedBlog) {
            return NextResponse.json({ success: false, message: "Blog not found." }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Blog Updated" }, { status: 200 });
    } catch (error) {
        console.error("Error updating blog:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();

        // Find the blog by ID
        const blog = await Blog.findOne({ _id: id });

        if (!blog) {
            // Handle case where the blog is not found
            return NextResponse.json({ success: false, message: "Blog not found." }, { status: 404 });
        }

        // Return the found blog
        return NextResponse.json({ success: true, blog }, { status: 200 });
    } catch (error) {
        // Log the error and return a 500 status with the error message
        console.error("Error fetching blog:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
