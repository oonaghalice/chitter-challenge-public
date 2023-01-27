//Import all the neccessary modules
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

//Import all the routers
import { router as login } from './src/login.js';
import { router as signup } from './src/signup.js';
import { router as home } from './src/home.js';
import { router as writePeep } from './src/writePeep.js';

//Define the post, host and database link
dotenv.config({ path: `env.${process.env.NODE_ENV}` });
const port = 5000;
const host = 'localhost';
const database = 'mongodb+srv://auth:auth123@oonaghalice.7vlnnqf.mongodb.net/chitter?retryWrites=true&w=majority';

//Connect to the database
const main = async () => {
    try {
        await mongoose.connect(database);
        console.log(`Database connected!`);
    } catch (err) {
        console.log(err)
    };
};
main().catch(error => console.log(error));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Set up all of the routes
app.use(`/login`, login);
app.use(`/signup`, signup);
app.use(`/home`, home);
app.use(`/writePeep`, writePeep);

//Set up the server and check it is listening
const server = app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
});

export default server;