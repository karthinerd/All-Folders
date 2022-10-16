
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentData', { useNewUrlParser : true}, function(err)
{
    if(!err) {

        console.log("MongoDB Connected");
    }
    else {

        console.log("Connection Failed" + err);
    }


});

require('./mongo.model');