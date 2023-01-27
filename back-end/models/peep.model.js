//Import all necessary modules
import mongoose from 'mongoose';

//Create a schema for the peeps
const peepModel = new mongoose.Schema({
    username: { type: String, required: true },
    date: { type: Date, default: new Date() },
    peep: { type: String, required: true }
});

//Export the schema as Peep
export default mongoose.model(`Peep`, peepModel);