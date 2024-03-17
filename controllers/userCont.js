
const User = require('../models/User');

async function signup(req,res){
    try {
        const data = req.body;
        const existingUser =  await User.findOne({email:data.email})
        if(existingUser){
            return res.status(404).json({message:"user already exists"})
        }

        const user = await User.create(data);
        console.log("User profile Created");
        return res.status(201).json(user)
    } 
    
    
    catch (error) {
        console.error();
        return res.status(500).json({message:"Inernal server error"})
        
    }
    

}




module.exports = {
    signup
}