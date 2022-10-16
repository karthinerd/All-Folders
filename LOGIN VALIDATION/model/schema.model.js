
const mongoose = require('mongoose');

// Define The Structure Of The Schema
var LoginSchema = new mongoose.Schema ({

    email : {
        type : String
        
    },
    password : {
        type:String
    }
});



// Name of The schema Model
mongoose.model('Validation',LoginSchema);