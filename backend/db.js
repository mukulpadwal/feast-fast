import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const mongoURI = `mongodb+srv://feastfastadmin:${process.env.REACT_APP_MONGO_ATLAS_DB_PASSWORD}@cluster0.3dqkopv.mongodb.net/?retryWrites=true&w=majority`;

const mongoDB = async () => {
    await mongoose.connect(mongoURI);
}

export default mongoDB;