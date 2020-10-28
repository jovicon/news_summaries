import mongoose from 'mongoose'

const ScraperSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    structure: Object,
    created_at: Date,
    updated_at: Date
});

export const Scraper = mongoose.model("Scraper", ScraperSchema);
