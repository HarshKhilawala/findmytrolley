require('dotenv').config();
const express = require('express');
const connectDB = require('./database');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require("body-parser");

const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

connectDB();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/homepage.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contactpage.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
