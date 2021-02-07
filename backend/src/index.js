import express from 'express';
import dotenv from 'dotenv';
import config from 'config';
import bodyParser from 'body-parser';
import {mongoConnect} from './db/connection';
import {router as summaryRouter} from './api/summaries';
import {router as scraperRouter} from './api/scrapers';

dotenv.config();

mongoConnect(config);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

// APIs
app.use('/api/v1/summaries',summaryRouter);
app.use('/api/v1/scrapers',scraperRouter);

// API ping-pong test
app.get('/ping', (req, res) => {
    res.status(200).send(
        {
            ping: 'pong'
        }
    );
});

export default app;