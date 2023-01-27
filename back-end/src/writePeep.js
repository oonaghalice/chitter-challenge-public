//Import all the necessary modules needed
import express from 'express';
import Peep from '../models/peep.model.js';
export const router = express.Router();

//Set up a post request with a new instance of the 
//Peep model with the correct details to send to the 
//database
router.route(`/`)
    .post((req, res) => {
        const newPeep = new Peep(req.body);
        console.log(req.body);
        newPeep.save(err => {
            if (err) {
                res.send(err);
            }
            else {
                res.send({ message: `Peep Uploaded` });
            }
        });
    });