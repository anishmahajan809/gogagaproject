const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type:String,
        required : true,
        trim:true,
        lowercase : true
    },
    email : {
        type: String,
        default : 'noprovided@spec.com',
        trim:true,
        lowercase : true
        // required : true,
    },
    location : {
        type : String,
        // default : 'Not provided'
    },
    age : {
        type : Number,
        default : 20
    },
});

const user = mongoose.model('users' , userSchema);
module.exports.user = user;
module.exports.userSchema = userSchema;
