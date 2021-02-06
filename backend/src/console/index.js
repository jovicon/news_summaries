<<<<<<< HEAD:backend/app/console/index.js
import { saveScraping } from '../tool/scrape_it/index.js';
import { scraper } from '../db/models/scrapers.js';
import { mongoConnect } from '../db/connection.js';
=======
import {saveScraping} from '../tool/scrape-it/index';
import { scraper } from '../db/models/scrapers';
import { mongoConnect } from '../db/connection';
>>>>>>> af3ba8843aedd1e1dd6ba507b99e3e1e4f9abf3a:backend/src/console/index.js
import config from 'config';


console.log("MANUAL - SCRAPER METHOD BEGINNING");
console.log("MANUAL - DB CONFIG: ", config);

const scrapingProcess = async () => {
    const scrapers = await scraper.find({}).exec();
    
    scrapers.map( async (scrapper) => {
        console.log("SCRAPPERS: ", scrapper.url);
        await saveScraping(scrapper);
    });
}

mongoConnect(config);
scrapingProcess();

console.log("SCRAPER METHOD ENDING");