
const express = require('express');

var router = express.Router();

// Import Mongoose Schema Model

const mongoose = require('mongoose');

const Validation = mongoose.model('Validation');


router.get ('/',function(req,res) {

    res.render("login/addOrEdit", {

        viewTitle : "Login Form"

    });

});

router.post('/',function (req,res) {

    // console.log(req.body);   Values Print in Console
    if (req.body._id=='')
    insertRecord(req,res);
    else
    updateRecord(req,res);
});

// Inset in MongoDB

function insertRecord(req,res) {
    
    validation = new Validation();

    validation.email = req.body.email;

    validation.password = req.body.password;

    validation.save(function(err,doc){

        if(!err) {

            res.redirect('login/details');

        }

       

            else

            console.log("Error During Insert :- " + err);

        

    });

}

function updateRecord(req,res) {

    Validation.findOneAndUpdate({_id:req.body._id},req.body,{new:true } , function(err,doc) {

        if(!err) {res.redirect ('login/details'); }
    
            else
            console.log("Error During Update :- " + err);
    });
}

router.get('/details',function(req,res){

    Validation.find(function(err,docs){
        if(!err) {
            res.render("login/details" , {
                details : docs
            });
        }

        else {
            console.log("Error in Showing Login Details" + err);
        }
    })

});


router.get('/:id',function(req,res){
    Validation.findById(req.params.id , function(err,doc){
        if(!err) {
            res.render("login/addOrEdit" , {
                viewTitle : "Update Login Form",
                validation:doc
            })
        }
    });
});

router.get('/delete/:id', (req, res) => {
   Validation.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/login/delete');
        }
        else { console.log('Error in delete :' + err); }
    });
});

module.exports = router ;