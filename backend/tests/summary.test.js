import chai from 'chai';
import chatHttp from 'chai-http';
import config from  'config';
import 'chai/register-should.js';
import app from '../src/index.js';


// import 'chai/register-should';
// import app from '../index';

chai.use(chatHttp);
const { expect } = chai;


describe('Summaries API Tests', () => {
    it('GET /api/v1/summaries/ returns an array of Summaries', async () => {

        const response = await chai.request(app).get('/api/v1/summaries/');

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceOf(Array);

    });
});