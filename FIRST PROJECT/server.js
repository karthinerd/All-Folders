
require('./model/database');

const studentController = require('./controller/studentController');

const express = require('express');

const path = require('path');

const hbs = require('handlebars');

const {engine} = require('express-handlebars')

const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({

    extended : true

}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.set('views',path.join(__dirname, '/view'));  

app.engine('hbs',engine({

    hbs : allowInsecurePrototypeAccess(hbs) ,

    defaultLayout : 'mainLayout' ,

    extname : 'hbs' ,

    runtimeOptions : {

        allowProtoPropertiesByDefault : true ,

        allowProtoMethodsByDefault : true ,

    },

    layoutsDir : __dirname + '/view/layouts' ,

}));

app.set('view engine' , 'hbs');

app.use('/student',studentController);

app.listen(3000,

    () => {
        
        console.log("Server Running On Port Number 3000");
});

