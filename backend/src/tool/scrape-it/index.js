// CommonJs
// const config = require('config');
// const mongoose = require('mongoose');
// const scrapeIt = require("scrape-it");
// const Summary = require('../../src/models/Summary')

// ES6
import config from 'config';
import { scrapeItAsync as scraping } from './loaderES6.js';
import { summary } from '../../db/models/summary.js';

export const saveScraping = async (url, googleStructure) => {
    const news = await scraping(url,googleStructure);

    console.log(news);
    console.log(config);
    news.articles.map((sum) => {

        let summarySave = new summary(sum);

        summarySave.save()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    });


};