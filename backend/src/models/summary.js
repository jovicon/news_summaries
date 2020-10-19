import mongoose from 'mongoose';


let summary = new mongoose.Schema({
    title: String,
    content: String,
    created_at: Date,
    updated_at: Date
});


module.exports = mongoose.model("Summary", summary)