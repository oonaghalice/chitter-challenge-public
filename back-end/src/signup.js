//Import all the necessary modules needed
import express from 'express';
import User from '../models/user.model.js';
export const router = express.Router();


//Set up a post request with the users details and 
//create a new instance of the user module to send
//to the database
router.route(`/`)
    .post((req, res) => {
        console.log(`this login ` + req.body);
        const user = new User(req.body);
        user.save(err => {
            if (err) {
                res.send(err);
            }
            else {
                res.send({ message: `Welcome to Chitter!` });
            }
        });
    });

export default router;
