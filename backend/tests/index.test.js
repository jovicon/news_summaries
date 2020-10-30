import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../app/index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing root endpoints:', () => {

    it('It should ping pong', (done) => {

        chai.request(app)
            .get('/ping')
            .set('Accept', 'application/json')
            .end((err, res) => {
            
                expect(res.status).to.equal(200);
                // expect(res.body.data).to.include(
                //     {
                //         ping: 'pong',
                //     }
                // );

                done();
        });
    });

});