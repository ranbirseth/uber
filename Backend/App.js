const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const ConnectToDb = require('./DB/Db');
const userRouter = require('./routes/user.routes');
ConnectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/user', userRouter);
module.exports = app;