// const debug = require('debug')('server:debug');
import debug from 'debug'
import dotenv from 'dotenv'
// import mongoose from 'mongoose';
import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import {router as summaryRouter} from './routes/summaries.js'
import {router as scraperRouter} from './routes/scrappers.js'
import {mongoConfig} from './db/dbSettings.js';

mongoConfig();
dotenv.config()

const app = express();

// support json encoded bodies in the req
app.use(bodyParser.urlencoded({ extended: false }));

//sets the limit of json bodies in the req body.
app.use(bodyParser.json());
app.use('/api/v1/',summaryRouter);
app.use('/api/v1/',scraperRouter);

app.get('*', (req, res) => {
    res.status(200).send(
        {
            message: 'Welcome to this get API.'
        }
    )
});

app.listen(config.get('port'), () => {
    debug(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
    console.log(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
});

export default app;

// export {app, listener}
// module.exports= app;
// module.exports.port=listen.address().port;