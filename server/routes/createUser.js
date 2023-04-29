const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

router.post('/createuser', async (req, res) => {
    const newUser = req.body;
    try{
        let ifExists = await User.findOne({email : newUser.email});
        if(ifExists){
            res.send({success : false})
        }else{
            const hashedPassword = await bcrypt.hash(newUser.password, 10)
            await User.create({
                name : newUser.name,
                email : newUser.email,
                password : hashedPassword
            });
            res.send({success : true})
        }
        
        
    }catch(error){
        console.error(error);
        res.send({success : false})
    }
})

module.exports = router;