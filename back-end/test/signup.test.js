//Import necessary modules
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import { describe } from 'node:test';
import server from '../server.js'
chai.use(chaiHttp);

//Testing suite for the signup page
describe('Testing suite for signup.js', () => {

    //Create a mockUser to send with the post request
    const mockUser = {
        first: 'Oonagh',
        last: 'Parker',
        email: 'oonagh@email.com',
        username: 'oonagh',
        password: 'password'
    };

    it('The post request for the signup page works', async () => {
        const result = await chai.request(server)
            .post(`/signup`)
            .send(mockUser);
        expect(result).to.have.status(200);
    });

});