import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const mongoURI = `mongodb+srv://feastfastadmin:${process.env.REACT_APP_MONGO_ATLAS_DB_PASSWORD}@cluster0.3dqkopv.mongodb.net/feastfastdb?retryWrites=true&w=majority`;

const mongoDB = async () => {

    try {
        await mongoose.connect(mongoURI)
            .then((response) => {
                return console.log("Connected succesfully");
            })
            .catch(error => console.log(error));
    } catch (error) {
        console.error(error.message);
    }

}

export default mongoDB;