import {saveScraping} from '../tools/scrapeit/index.js';
import { Scraper } from '../db/models/Scraper.js';
import { mongoConfig } from '../db/dbSettings.js';


console.log("SCRAPER METHOD BEGINNING");

const scrapingProcess = async () => {
    const scrapers = await Scraper.find({}).exec();
    scrapers.forEach(async (scraper) => {
        await saveScraping(scraper.url, scraper.structure);
    });
}

mongoConfig();
scrapingProcess();

console.log("SCRAPER METHOD ENDING");