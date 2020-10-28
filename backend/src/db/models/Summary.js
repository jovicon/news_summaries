import mongoose from 'mongoose';

const SummarySchema = new mongoose.Schema({
    title: String,
    url: String,
    content: String,
    category: String,
    channel: String,
    tags: Array,
    created_at: Date,
    updated_at: Date
});

export const Summary = mongoose.model("Summary", SummarySchema);