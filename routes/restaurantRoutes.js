const express = require('express');
const router = express.Router();

const { browseRestaurants} = require('../controllers/restaurantCont');


router.get('/', browseRestaurants);
// router.get('/search', searchRestaurant);

module.exports=router;