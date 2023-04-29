const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

router.post('/loginuser', async (req, res) => {
    const loginData = req.body;
    const userExists = await User.findOne({email : loginData.email});
    if(!userExists){
        res.send({
            success : false
        })
    }
    else{
        const pwCompare = await bcrypt.compare(loginData.password, userExists.password)
        if(pwCompare){
            res.send({
                success : true,
                name : userExists.name,
                isAdmin : userExists.isAdmin
            })
        }
        else{
            res.send({
                success : false
            })
        }
    }
})

module.exports = router