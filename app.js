require('dotenv').config()
const express = require('express');
const { sequelize } = require('./utils/database');
const { database } = require('./src/app')
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

app.use('/houdix/school/managers', require('./src/app/Manager/router'));
app.use('/houdix/school/classes', require('./src/app/Class/router'));
app.use('/houdix/school/groups', require('./src/app/Group/router'));
app.use('/houdix/school/students', require('./src/app/Student/router'));
app.use('/houdix/school/subjects', require('./src/app/Subject/router'));
app.use('/houdix/school/teachers', require('./src/app/Teacher/router'));
app.use('/houdix/school/sessions', require('./src/app/Session/router'));

app.listen({ port: process.env.PORT }, async () => {
    // await database.sync({
    //     alter: true,
    //     // force: true
    // }); 
    console.log('starting on port : ' + process.env.PORT);
});

