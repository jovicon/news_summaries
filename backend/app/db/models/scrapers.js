import mongoose from 'mongoose'

const scraperSchema = new mongoose.Schema({
    url: String,
    structure: Object,
    url_replace: String,
    replace: String,
    created_at: Date,
    updated_at: Date
});

export const scraper = mongoose.model("scraper", scraperSchema);