const express = require('express')
const router = express.Router()
const {user} = require("../models/user")
const Cors = require('cors');

// mongodb+srv://anish:atnm123@cluster0.rv92y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


router.use(Cors());
router.get('/autocomplete' , async(req,res,next) =>{
    try {
        // console.log(req.query.term);
        var requestedUser = req.query.term;
        var searchKey = new RegExp(requestedUser)
        const data = await user.find({$or:[{ name: { $regex: searchKey } },{ location: { $regex: searchKey } }]});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send('an error found')
    }
    
});


module.exports = router;