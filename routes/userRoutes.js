const express = require('express');

const router = express.Router();

const {signup,login,AllUsers,logout,update,resetPassword} = require('../controllers/userCont')


router.get('/', AllUsers)
router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout)
router.put('/update/:id',update)
router.post('/resetPassword',resetPassword)

module.exports=router;