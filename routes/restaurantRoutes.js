const express = require('express');
const router = express.Router();

const { browseRestaurants, searchRestaurant,MenuRes} = require('../controllers/restaurantCont');


router.get('/', browseRestaurants);
router.get('/search/:name', searchRestaurant);
router.get('/:name/menu',MenuRes)

module.exports=router;