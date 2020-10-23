const mongoose = require('mongoose');


let Summary = new mongoose.Schema({
    id: mongoose.ObjectId,
    title: String,
    url: String,
    content: String,
    category: String,
    channel: String,
    tags: Array,
    created_at: Date,
    updated_at: Date
});


module.exports = mongoose.model("Summary", Summary)