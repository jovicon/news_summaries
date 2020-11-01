import {saveScraping} from '../tool/scrape-it/index';
import { scraper } from '../db/models/scrapers';
import {mongoConnect} from '../db/connection';
import config from 'config';


console.log("SCRAPER METHOD BEGINNING");

const scrapingProcess = async () => {
    const scrapers = await scraper.find({}).exec();
    scrapers.forEach(async (scraper) => {
        await saveScraping(scraper.url, scraper.structure);
    });
}

mongoConnect(config);
scrapingProcess();

console.log("SCRAPER METHOD ENDING");