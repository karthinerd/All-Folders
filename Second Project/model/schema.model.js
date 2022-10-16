
const mongoose = require('mongoose');

var attendanceSchema = new mongoose.Schema({

    rollno : {
        type : String
    },
    name : {
        type : String
    }
});

mongoose.model('Attendance',attendanceSchema);