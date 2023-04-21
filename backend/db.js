import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const mongoURI = `mongodb+srv://feastfastadmin:${process.env.REACT_APP_MONGO_ATLAS_DB_PASSWORD}@cluster0.3dqkopv.mongodb.net/feastfastdb?retryWrites=true&w=majority`;

const mongoDB = async () => {
    const response = await mongoose.connect(mongoURI, { useNewUrlParser: true })
        .catch(err => console.log(err));

    if(response){
        console.log("Connected to database...");
    }
}

export default mongoDB;