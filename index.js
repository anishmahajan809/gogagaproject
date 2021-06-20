const express = require("express");
const app = express()
const path = require('path');
const ejsmate = require('ejs-mate')

// routes
require('./database/mongoose');
const newuser = require('./routes/newuser')
const extraroute = require('./routes/extraroutes')
const allSubmissiions = require('./routes/allSubmissiions')



//setting the uses
app.engine('ejs' , ejsmate)
app.set('view engine' , 'ejs');
app.set('views' , 'views')
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(__dirname + '/extras/css'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/extras'));
app.use(express.static(__dirname + '/extras/js'));
app.use(express.static(__dirname + '/extras/html'));
app.use(newuser)
app.use(allSubmissiions)
app.use(extraroute)



app.get('*' , (req,res) => {
    res.send("There no such page")
});
app.listen(8000 , () => {
    console.log("We are now online")
})
