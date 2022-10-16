
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/New' , { useNewUrlParser : true } , function(err){

if(!err) {
    console.log("MongoDB Connected");
}
else{
    console.log("Error in Database connection " + err);
}
});

require('./schema.model');