const express = require('express');
const Restaurant = require('../models/Restaurant');


async function browseRestaurants(req, res){
    try{
        const restaurant = await Restaurant.find();
        const showResults = restaurant.map(res => ({
            name: res.name,
            address: res.address,
        }));
        
        return res.status(200).json(showResults);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal Server Error"});
    }   
}


module.exports = {
    browseRestaurants
}