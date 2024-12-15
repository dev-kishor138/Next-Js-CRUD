const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Category title is required'],
            trim: true,
            minLength: [3, 'Title must be at least 3 characters long'],
            maxLength: [100, 'Title cannot exceed 100 characters'],
        },
        slug: {
            type: String,
            required: [true, 'Slug is required'],
            minLength: [3, 'Slug must be at least 3 characters long'],
            maxLength: [100, 'Slug cannot exceed 100 characters'],
            unique: true,
            index: true,
        },
        image: {
            type: {
                url: { type: String, required: true },
                contentType: { type: String, required: false },
            },
            required: true,
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'inactive',
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;