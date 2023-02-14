const express = require('express');
const parser = require('json-parser');
const UserController = require('./user.controller');
const connectDB = require('./db');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/users',UserController.getUsers)
app.post('/users',UserController.addUser)

app.listen(3000);