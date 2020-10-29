import {expect} from 'chai';
import request from 'supertest';
import {server} from '../src/index';


describe('Summaries API Tests', () => {
    it('GET /api/v1/summaries/ returns an array of Summaries', async () => {
        const response = await request(server).get('/api/v1/summaries/');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceOf(Array);
    });
});