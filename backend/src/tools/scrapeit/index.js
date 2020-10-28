// CommonJs
// const config = require('config');
// const mongoose = require('mongoose');
// const scrapeIt = require("scrape-it");
// const Summary = require('../../src/models/Summary')

// ES6
import config from 'config';
import { scrapeItAsync as scraping } from '../loaderES6/index.js';
import { Summary } from '../../src/models/Summary.js';
import { mongoConfig } from '../../db/dbSettings.js';

mongoConfig();

export let saveScraping = async (url, googleStructure) => {
    const news = await scraping(url,googleStructure);

    news.articles.map((summary) => {

        let summarySave = new Summary(summary);

        summarySave.save()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    });
};