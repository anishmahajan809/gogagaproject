const express = require('express')
const router = new express.Router()
const {user} = require('../models/user')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/users' ,async(req ,res) => {

    try {
        const data = await user.find({})
        // console.log(doctor)
        if(data){
            res.render('display_users' , {data : data});
        }
        else{ res.status(404).send("no data found") }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
});

router.post('/SearchUser' ,async(req ,res) => {
    var requestedUser = req.body.tags;
    var searchKey = new RegExp(requestedUser)
    try {
        const data = await user.find({$or:[{ name: { $regex: searchKey } },{ location: { $regex: searchKey } }]});
        // console.log(data);
        if(data && data.length > 0){
            res.render('display_users' , {data : data});
        }
        else{ res.status(404).send("no data found") }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
});


module.exports = router;