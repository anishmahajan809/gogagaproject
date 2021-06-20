const router = require("express").Router()
const express = require('express')
const {user} = require('../models/user')
var {userSchema} = require('../models/user')


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/',(req,res)=>{
    res.redirect('/upload');
})
router.get('/upload',(req, res) => {   
    res.render('uploadpage')
});

router.post('/upload', (req, res) => {
    console.log(req.body)
    userSchema.name = req.body.name;
    userSchema.age = req.body.age;
    userSchema.email = req.body.email;
    userSchema.location = req.body.location;
    user.insertMany(userSchema);
    res.redirect('/users')
});

module.exports = router;