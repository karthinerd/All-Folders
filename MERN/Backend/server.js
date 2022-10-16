var cors = require('cors')

require('./model/database');

const express = require('express');

const bodyParser = require('body-parser');

const myObj = require('./controller/mycontroller');


var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

app.use('/api/login',myObj);

app.listen(5000,() => {
  console.log("Server is running on port Number 3000");
});