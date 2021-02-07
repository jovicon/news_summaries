import mongoose from 'mongoose';

const summarySchema = new mongoose.Schema({
    title: String,
    url:  { type: String, unique: true },
    content: String,
    category: String,
    channel: String,
    tags: Array,
    created_at: Date,
    updated_at: Date
});

const summary = mongoose.model("summary", summarySchema);
export { summary } 