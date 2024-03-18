const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function AllUsers (req,res){
    try {
        const users = await User.find();
        console.log("Here is the list of Customers");
        return res.json(users)
        
    } catch (error) {
        console.error("Error Fetching Users: " , error);
        return res.status(500).json({error:"Internal server error"})
        
    }
    
}
    
    


async function signup(req, res) {
    try {
        const data = req.body;
        const existingUser = await User.findOne({ email: data.email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        data.password = hashedPassword;

        const newUser = await User.create(data);


        

        console.log("User profile created");
        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function login(req, res) {
    try {
        const data = req.body;
        const user = await User.findOne({ email: data.email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const passwordMatched = await bcrypt.compare(data.password, user.password);

        if (!passwordMatched) {
            return res.status(401).json({ message: "Wrong password" });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            { userId: user._id, email: user.email },
            "12345",
            { expiresIn: '1h' }
        );

        res.cookie("token",jwtToken,{
            httpOnly:true,
            sameSite:"lax",
            path:'/',
            expires: new Date( Date.now() + 1000*60*60*24)
        })

        return res.status(200).json({ jwtToken,user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


async function logout(req,res){
   try {
     res.clearCookie("token");
     return res.status(200).json({ message:"Logout Suucessfully" });
   } 
   catch (error) {
    console.error(error);
        return res.status(500).json({ message: "Internal server error" });
   }

}



async function update(req,res){
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await User.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidtors:true
        });

        if(!response){
            return res.status(401).json({message:"Invalid"})
        } 

        console.log("User's Info Updated");
        return res.status(201).json(response)
       
    } 


    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
        
    }

}




module.exports = {
    signup,
    login,
    AllUsers,
    logout,
    update
};
