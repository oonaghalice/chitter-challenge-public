//Import all the necessary modules needed
import express from 'express';
import User from '../models/user.model.js';
export const router = express.Router();

//Set up a post request to find the user with the 
//matching username and password so the user can 
//be logged in correctly

router.route(`/`)
    .post((req, res) => {
        const { username, password } = req.body;
        User.findOne({ username }, (err, user) => {
            if (username && password == user.password) {
                res.send({ message: `Login success` });
                res.status(200);
            }
            else {
                res.send(`Incorrect login details.`);
                res.send(err);
            }
        });
    });



