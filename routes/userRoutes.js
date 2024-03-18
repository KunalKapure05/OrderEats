const express = require('express');

const router = express.Router();

const {signup,login,AllUsers,logout,update} = require('../controllers/userCont')


router.get('/', AllUsers)
router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout)
router.put('/update/:id',update)

module.exports=router;