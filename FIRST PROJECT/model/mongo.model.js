
const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({

    Name:{
        type:String
    },

    Dob:{
        type:String
    },

    emailid:{
        type:String
    },

    Mobile:{
        type:String
    }
    
});

mongoose.model('Student',studentSchema);  