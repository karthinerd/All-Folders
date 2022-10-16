
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/MERN",{UseNewUrlParser : true}, function(err){
    if(!err) {
          console.log("Mongodb Connected");
    }
    else{
        console.log("Error is" + err);
    }
});

require('./schema.model');