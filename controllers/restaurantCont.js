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



async function searchRestaurant(req, res) {
    const name = req.params.name;
    try{
        const restaurantToFind = await Restaurant.find({name:{$regex:name, $options: "i"}});
        return res.status(200).json(restaurantToFind);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal Server Error"});
    }

}


module.exports = {
    browseRestaurants,
    searchRestaurant
}