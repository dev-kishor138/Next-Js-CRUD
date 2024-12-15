import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: {
                name: {
                    type: String,
                    required: true,
                },
                data: {
                    type: Buffer,
                    required: true,
                },
                contentType: {
                    type: String,
                    required: true,
                },
            },
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;