const express = require('express');
const router = express.Router();

const { browseRestaurants, searchRestaurant} = require('../controllers/restaurantCont');


router.get('/', browseRestaurants);
router.get('/search/:name', searchRestaurant);

module.exports=router;