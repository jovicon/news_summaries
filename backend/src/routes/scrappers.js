import express from 'express';
import { Scraper } from '../db/models/Scraper.js';
import {saveScraping} from '../tools/scrapeit/index.js';
export const router = express.Router();


router.get('/scrapers', async (req, res) => {
    try {
        const scrapers = await Scraper.find({}).exec();
        
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
