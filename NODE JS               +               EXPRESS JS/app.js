
const express = require("express");

const bodyParser = require("body-parser");

var fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({

    extended : false 

}));

app.get("/",function(req,res)

{

    res.sendFile(__dirname + "/index.html");

});

app.post("/addUser",function(req,res)

{

    var username = req.body.username;

    var dob = req.body.dob;

    var profession = req.body.profession;

     var obj ={};

     var key = req.body.userid;

     var newuser = {
        
        "name" : username,
        "dob" : dob,
        "profession" : profession
     }

     obj[key] = newuser;


     fs.readFile("user.json","utf8",function(err,data)

     {

        data = JSON.parse(data);

        data[key] = obj[key];

        console.log(data);

        var updateuser = JSON.stringify(data);


        fs.writeFile("user.json",updateuser,function(err)

        {
            res.end(JSON.stringify(data));

        });

     });

});

app.post("/see",function(req,res){
   
    fs.readFile("user.json","utf8",function(err,data){

        var users = JSON.parse(data) ;

        var user = users[req.body.id];

        console.log(user);

        res.send(JSON.stringify(user));

    });

});

app.post("/delete",function(req,res){
   
    fs.readFile("user.json","utf8",function(err,data){

        data = JSON.parse(data) ;

        delete data[req.body.sid];

        console.log(data);

        var updateuser = JSON.stringify(data);

        fs.writeFile("user.json",updateuser,function(err)

        {
            res.end(JSON.stringify(data));

        });

    });
    
});

app.get('/show',function(req,res){

    fs.readFile("user.json","utf8",function(err,data){

        console.log(data);

        res.end(data);

    });
});

app.listen(8080,function()

{

    console.log("Server is running on port 8080");

});