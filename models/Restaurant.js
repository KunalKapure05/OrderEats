const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true,
    },

    address: {
        type: String,
        required: true,
    },
    menu : [{type: mongoose.Schema.Types.ObjectId, ref: "MenuItem"}]
});


const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
