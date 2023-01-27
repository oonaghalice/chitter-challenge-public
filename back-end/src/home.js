//Import all the necessary modules
import express from 'express';
import Peep from '../models/peep.model.js';
export const router = express.Router();


//Get all the peeps in the database so they can be displayed
//of the home page

//Set up a get request
router.route(`/`).get((req, res) => {
    //Find all the peeps in the database
    Peep.find({}, (err, allPeeps) => {
        err
            ? res.status(404).json({ message: `Cannot load peeps...` })
            : res.status(200).json(allPeeps);
    });
});
export default router;