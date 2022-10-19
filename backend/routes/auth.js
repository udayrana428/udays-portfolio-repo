const express = require('express')
const User = require('../models/UserModel')
const router = express.Router()
require("../db/connect")
// Route1:Creating Signup Endpoint
router.post('/api/auth/createuser', (req, res) => {
    const { name, email, password } = req.body
    if(!name||!email||!password){
        return res.status(422).json({error:"Fill the form correctly"})
    }
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email already exist"})
        }
        const user=new User({
            name,email,password
        })
        user.save().then(()=>{
            res.status(401).json({Message:"Successfully added"})
        }).catch((err)=>res.status(500).json({error:"failed"}))
    }).catch((err)=>{console.log(err)})
    // const user= User(req.body)
    // user.save()
    // res.send(user)

    
})

module.exports = router