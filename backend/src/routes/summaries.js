import express from 'express';
import summary from '../models/Summary';
const router = express.Router();


router.get('/summaries', async(req, res) => {
    try {
        const summaries = await summary.find({}).exec();
        res.status(200).send(summaries);
    }
    catch (error) {
        res.status(500).send({message:'Internal server error.'});
    }
});


module.exports = router;