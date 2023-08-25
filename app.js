require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/houdix-school/public', express.static(path.join(__dirname, 'public')));


app.get('/houdix/school', (req, res) => {
    return res.json("welcome to houdix app!");
});

app.listen({ port: process.env.PORT }, async () => {
    console.log('starting on port : ' + process.env.PORT);
});