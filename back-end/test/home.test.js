//Import necessary modules
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import { describe } from 'node:test';
import server from '../server.js'
chai.use(chaiHttp);

//Testing suite for the home page
describe('Testing suite for home.js', () => {

    it('The get request for the home page works', async () => {
        const result = await chai.request(server)
            .get(`/home`);
        expect(result).to.have.status(200);
    });

});