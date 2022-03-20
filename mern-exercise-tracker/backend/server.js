const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

// { useNewUrlParser: true, useCreateIndex: true } no longer needed was depricated with 6 Mongoose 6. 

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})