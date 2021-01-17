import mongoose from 'mongoose'

const scraperSchema = new mongoose.Schema({
    url: String,
    structure: Object,
    created_at: Date,
    updated_at: Date
});

export const Scraper = mongoose.model("scraper", scraperSchema);