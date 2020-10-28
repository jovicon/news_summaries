import express from 'express';
import { Summary } from '../db/models/Summary.js';
export const router = express.Router();


router.get('/summaries', async(req, res) => {
    try {
        const summaries = await Summary.find({}).exec();
        res.status(200).send(summaries);
    }
    catch (error) {
        res.status(500).send({message:'Internal server error.'});
    }
});

