const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 100,
        },
        slug: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 100,
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
        status: {
            type: String,
            enum: ['active', 'inactive'], // Define allowed values
            default: 'inactive', // Correct default syntax
        },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;