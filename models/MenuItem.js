const express = require('express');
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;