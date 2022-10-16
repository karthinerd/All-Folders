
// Import Mongoose
const mongoose = require('mongoose');

// Connect To MongoDB Compass
mongoose.connect('mongodb://localhost:27017/Login', {useNewUrlParser : true} , function(err){

   if(!err){
    console.log("Mongodb Connected");
   }
   else{
    console.log(err);
   }
});

// Import Mongoose Schema Model
require('./schema.model');