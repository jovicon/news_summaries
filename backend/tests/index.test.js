import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should.js';
import config from  'config';
import app from '../src/index.js';


// import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Server', () => {

    // it('tests that server is running current port', async () => {
    //     expect(listener.address().port).to.equal(config.get('port'))
    // })

    it('It should response: "Welcome to this get API."', (done) => {
        chai.request(app)
            .get("/")
            .set("Accept", "application/json")
            .end((err,res) => {
                expect(res.status).to.equal(200);
                res.body.should.have.property('message')
                    .eql("Welcome to this get API.");
                done();
            });
    });

});