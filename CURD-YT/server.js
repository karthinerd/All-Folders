require('./models/db');

const hbs = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');



var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', engine({
    hbs : allowInsecurePrototypeAccess(hbs),
    defaultLayout: 'mainLayout',
    extname:'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
      },
 layoutsDir: __dirname + '/views/layouts/',
}));

app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);

