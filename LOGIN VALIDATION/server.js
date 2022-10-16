// Import Module

require('./model/database');

const loginController = require('./controller/LoginController');

// Import Express FrameWork

const express = require('express');

// Because of POST Method

const bodyParser = require ('body-parser');

// Help : Join to The Directory

const path = require('path');

// Help : Using Handlebars

const hbs = require('handlebars');

const {engine} = require('express-handlebars');

const {allowInsecurePrototypeAccess} =require('@handlebars/allow-prototype-access');

// Assign Express to app

var app = express();

// Encrypted to decrypted

app.use(bodyParser.urlencoded({

    extended:true

}));

// Read by JSON

app.use(bodyParser.json());

// SET Template Engine

app.set('views',path.join(__dirname,'/view/'));

app.engine('hbs',engine({

    hbs:allowInsecurePrototypeAccess(hbs),

    extname : 'hbs',

    defaultLayout : 'mainLayout',

    runtimeOptions : {

        allowProtoPropertiesByDefault : true ,

        allowProtoMethodsByDefault : true
    },

    layoutsDir : __dirname + '/view/layout'

}));

app.set('view engine','hbs');

// Middleware 

app.use('/login',loginController);

// Server Listen to The Port Number

app.listen(3000,()=>{

    console.log("Server Running on Port Number 3000");

});