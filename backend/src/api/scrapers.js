import express from 'express';
import { scraper } from '../db/models/scrapers';
import {saveScraping} from '../tool/scrape-it/index';

export const router = express.Router();

router.get('/process', async (req, res) => {
    try {
        const scrapers = await scraper.find({}).exec();
        
        await scrapers.forEach( async (scraper) => {
            console.log(scraper);
            await saveScraping(scraper.url, scraper.structure);
        });

        res.status(200).send(scrapers);
    }
    catch (error) {
        res.status(500).send({message:'Internal server error.'});
    }
});
