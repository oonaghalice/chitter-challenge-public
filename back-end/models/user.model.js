//Import all the necessary modules
import mongoose from 'mongoose';

//Create a schema for the users of Chitter
const userModel = new mongoose.Schema({
    first: { type: String, required: true },
    last: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

//Export the schema as user
export default mongoose.model(`User`, userModel);