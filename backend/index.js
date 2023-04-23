// Importing important modules
import express from 'express';
import bodyParser from 'body-parser';
import mongoDB from './db.js';
import cors from "cors";
import userRouter from './Routes/UserValidation.js';
import dataRouter from './Routes/DisplayData.js';

// Initializing the app
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Alloeing the cors
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next(); 
});

// Connecting to mongodb databse
mongoDB();

// EndPoints

app.get("/", (req, res) => {
  res.json({reply : "Hello There!!!"});
})

app.use("/api", userRouter);
app.use("/api", dataRouter);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});