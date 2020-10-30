import express from 'express';
import bodyParser from 'body-parser';
import {router as summaryRouter} from './api/summaries';
import {router as scraperRouter} from './api/scrapers';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/summaries',summaryRouter);
app.use('/api/v1/scrapers',scraperRouter);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app;