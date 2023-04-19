import express from 'express';
import mongoDB from './db.js';
import router from './Routes/CreateUser.js';

const app = express();
const port = 5000;

mongoDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})