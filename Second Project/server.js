require('./model/database');

var Newcontroller = require('./controller/newController');

const express = require('express');

const hbs = require('handlebars');

const {engine} = require('express-handlebars');

const {allowInsecurePrototypeAccess} = require ('@handlebars/allow-prototype-access');

const bodyParser = require('body-parser');

const path = require ('path');

var app = express();

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

app.set('views',path.join(__dirname,'/view/'));

app.engine('hbs',engine({

    'hbs' : allowInsecurePrototypeAccess(hbs),

    defaultLayout : 'mainLayout',

    extname : 'hbs' ,

    runtimeOptions : {

        allowProtoPropertiesByDefault : true ,

        allowProtoMethodsByDefault : true
    },
    
    layoutsDir : __dirname + '/view/layout' 

}));

app.set('view engine','hbs');

app.listen(3000);

app.use('/attendance',Newcontroller);