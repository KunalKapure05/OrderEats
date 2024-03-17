const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());



mongoose.connect(process.env.URL, {
})
.then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000 + Connected to mongodDB");
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});