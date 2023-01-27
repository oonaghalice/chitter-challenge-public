//Import necessary modules
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import { describe } from 'node:test';
import server from '../server.js'
chai.use(chaiHttp);

//Testing suite for the home page
describe('Testing suite for home.js', () => {

    //Create a mockPeep to send with the post request
    const mockPeep = {
        username: 'oonagh',
        date: new Date(),
        peep: 'chitter challenge is hard'
    }

    it('The post request for the home page works', async () => {
        const result = await chai.request(server)
            .post(`/writePeep`)
            .send(mockPeep);
        expect(result).to.have.status(200);
    });

});