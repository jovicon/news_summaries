import { saveScraping } from '../tool/scrape_it/index.js';
import { Scraper } from '../db/models/scrapers.js';
import { mongoConnect } from '../db/connection.js';
import config from 'config';


console.log("MANUAL - SCRAPER METHOD BEGINNING");
console.log("MANUAL - DB CONFIG: ", config);

const scrapingProcess = async () => {
    const scrapers = await Scraper.find({}).exec();
    
    scrapers.map( async (scrapper) => {
        console.log("SCRAPPERS: ", scrapper.url);
        await saveScraping(scrapper);
    });
}

mongoConnect(config);
scrapingProcess();

console.log("SCRAPER METHOD ENDING");