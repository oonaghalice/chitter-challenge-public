//Import necessary modules
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
// import { describe } from 'node:test';
import server from '../server.js'
chai.use(chaiHttp);

//Testing suite for the login page
describe('Testing suite for login.js', () => {

    //Create a mockUser to send with the post request
    const mockUser = { username: 'oonagh', password: 'password' };

    it('The post request for the login page works', async () => {
        const result = await chai.request(server)
            .post(`/login`)
            .send(mockUser);
        expect(result).to.have.status(200);
    });

});