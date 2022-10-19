const express = require('express')
const Notes = require('../models/NotesModel')
const router = express.Router()
require("../db/connect")
// Route1:Creating Signup Endpoint
router.post('/api/note/createnote', (req, res) => {
    const { title,description } = req.body
    if(!title||!description){
        return res.status(422).json({error:"Fill the form correctly"})
    }
    Notes.findOne({title:title})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Document already exists"})
        }
        const note=new Notes({
            title,description
        })
        note.save().then(()=>{
            res.status(201).json({Message:"Successfully added"})
        }).catch((err)=>res.status(500).json({error:"failed"}))
    }).catch((err)=>{console.log(err)})
    // const user= User(req.body)
    // user.save()
    // res.send(user)

    
})

module.exports = router