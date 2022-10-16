
const mongoose = require('mongoose');

let mongooseSchema = mongoose.Schema({

    email : {
        type : String
    },
    password : {
        type : String
    }
})

mongoose.model('fb',mongooseSchema);