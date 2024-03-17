const express = require('express');

const router = express.Router();

const {signup,login,AllUsers,logout} = require('../controllers/userCont')


router.get('/', AllUsers)
router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout)

module.exports=router;