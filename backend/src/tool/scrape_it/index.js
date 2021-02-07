// CommonJs
// const config = require('config');
// const mongoose = require('mongoose');
// const scrapeIt = require("scrape-it");
// const Summary = require('../../src/models/Summary')

// ES6
import config from 'config';
import { scrapeItAsync as scraping } from './loaderES6.js';
import { summary } from '../../db/models/summary.js';

export const saveScraping = async (scrapper) => {
    const news = await scraping(scrapper.url,scrapper.structure);

    console.log(news);
    console.log(config);
    news.articles.map((sum) => {
        sum.url = scrapper.replace
            ? sum.url.replace(scrapper.replace, scrapper.url_replace)
            : `${scrapper.url_replace}${sum.url}`;

        const summarySave = new summary(sum);

        summarySave.save()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    });


};