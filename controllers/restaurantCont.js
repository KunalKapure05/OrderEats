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



async function MenuRes(req, res) {
    try {
        const name = req.params.name; 
        
        const restaurant = await Restaurant.findOne({ name }).populate('menu')

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
// i have to return the menuietms
        const menu = restaurant.menu

        return res.status(200).json({ restaurant: restaurant.name, menu });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = {
    browseRestaurants,
    searchRestaurant,
    MenuRes
}