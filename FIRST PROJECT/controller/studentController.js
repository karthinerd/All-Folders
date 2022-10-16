
const express = require('express');

var router = express.Router();

const mongoose = require('mongoose');

const Student = mongoose.model('Student');

router.get('/' , function(req,res)  {

    res.render("students/addOrEdit",{

        viewTitle : "CURD APPLICATION"

    });

});

router.post('/' , function(req,res) {

    if (req.body._id == '')
    insertRecord(req, res);

    else
    updateRecord(req, res);

});

function insertRecord (req,res) {

    var studentsData = new Student();

    studentsData.Name = req.body.Name;

    studentsData.Dob = req.body.Dob;

    studentsData.emailid = req.body.emailid;

    studentsData.Mobile = req.body.Mobile;

    studentsData.save( function(err,doc) {

        if (!err)
        res.redirect('student/list');

        else {
            if (err.Name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("students/addOrEdit", {
                    viewTitle: "Insert Students",
                    studentsData : req.body
                });
            }

        else
            console.log("Error is" + err);
        }

    });

}

function updateRecord(req, res) {

    Student.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {

        if (!err) { res.redirect('student/list'); }

        else {
            if (err.Name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("students/addOrEdit", {
                    viewTitle: "Update Students",
                    studentsData : req.body
                });
            }

        else{
            console.log("Error is" + err);
        }
    }

    });

}

router.get('/list', (req, res) => {

   Student.find( function (err,docs){

    if(!err) {

        res.render('students/list' , {

            list : docs 

        });

    }

    else {

        console.log("Error in retrive" + err);
    }

   });

});

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'Name':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'emailid':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id',function(req,res){

    Student.findById(req.params.id , function (err,doc) {

    if(!err) {

        res.render("students/addOrEdit",{

            viewTitle : "Update Students",

            studentsData : doc
    
        });

    }

 });

});

router.get('/delete/:id' , function(req,res) {

    Student.findByIdAndRemove(req.params.id , function (err, doc) {
        
        if(!err) {
            res.redirect('/student/list');
        }

        else {
            console.log("Error in Delete :" + err);
        }

    });

});

module.exports = router;               