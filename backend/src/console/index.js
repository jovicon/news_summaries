import {saveScraping} from '../tools/scrapeit/index.js';
import { Scraper } from '../models/Scraper.js';


console.log("SCRAPER METHOD BEGINNING");

const scrapers = await Scraper.find({}).exec();
scrapers.forEach((scraper) => {
    console.log(scraper);
    await saveScraping(scraper.url, scraper.structure);
});

console.log("SCRAPER METHOD ENDING");