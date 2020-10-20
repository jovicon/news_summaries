import mongoose from 'mongoose';


let summary = new mongoose.Schema({
    id: mongoose.ObjectId,
    title: String,
    content: String,
    channel: String,
    created_at: Date,
    updated_at: Date
});


module.exports = mongoose.model("Summary", summary)