import mongoose from 'mongoose'

const scraperSchema = new mongoose.Schema({
    url: String,
    structure: Object,
    created_at: Date,
    updated_at: Date
});

export const scraper = mongoose.model("scraper", scraperSchema);