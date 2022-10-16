
const express = require('express');

var router = express.Router();

const mongoose = require('mongoose');

const studentAttendance = mongoose.model('Attendance');

router.get('/',function(req,res){

    res.render('newattend/addOrEdit', {
        viewTitle : "Attendance"
    });

});

router.post('/',function(req,res){
   if (req.body._id == '') {
    insertRecord(req,res);
   } 
   else {
    updateRecord(req,res);
   }
});

function insertRecord(req,res) {
    var stu = new studentAttendance();

    stu.rollno = req.body.rollno;

    stu.name = req.body.name;

    stu.save(function(err,doc){
        if(!err){
            res.redirect('attendance/tabel');
        }

        else {
            if (err.email == 'validationError') {
                handleValidationError (err,req.body) ;
                    res.render("newattend/addOrEdit", {
                        viewTitle : "Insert Record",
                        stu : req.data
                    });
                
            }
            else {
                console.log("Error in Insert" + err);
            }
        }
    });

};

function updateRecord(req,res) {
    studentAttendance.findOneAndUpdate ({_id : req.body._id},req.body,{new : true},function(err,doc){
        if(!err) {res.redirect('attendance/tabel');}
        else {
            if (err.email == 'validationError') {
                handleValidationError (err,req.body) ;
                    res.render("newattend/addOrEdit", {
                        viewTitle : "Insert Record",
                        stu : req.body
                    });
                
            }
            else {
                console.log("Error in update" + err);
            }
        }
    });
}

router.get('/tabel', function(req,res) {
    studentAttendance.find(function(err,docs){
        if(!err) {
            res.render('newattend/tabel',{
                list : docs
            })
        }
        else {
            console.log("Error in showing Tabel " + err);
        }
    })
});

function handleValidationError(err,body) {
    for (field in err.errros){
        switch (err.errros[field].path) {
            case 'rollno':
                body['rollnoError'] = err.errros[field].message;
                break;
                case 'name':
                    body['nameError'] = err.errros[field].message;
            default:
                break;
        }
    }
}

module.exports=router;