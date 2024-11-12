// src/models/topic.js
import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String
    },
    {
        timestamps: true
    }
);

// Use existing model if already defined, otherwise define it
const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;
