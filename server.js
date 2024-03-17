const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const mongoose = require("mongoose");
const app = express();
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const MenuItem = require("./models/MenuItem");
const Restaurant = require("./models/Restaurant");
const User = require("./models/User");

app.use(bodyParser.json());


app.use('/users',userRoutes);
app.use('/restaurants', restaurantRoutes);



 

mongoose.connect(process.env.URL)
.then(async () => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000 + Connected to mongodDB");
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

