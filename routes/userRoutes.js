const express = require('express');

const router = express.Router();

const {signup} = require('../controllers/userCont')



router.post('/signup',signup);
// router.post('/login',login);
// router.post('/logout',logout)

module.exports=router;