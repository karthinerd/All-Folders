const express = require('express');

var router = express.Router();

router.post("/", function(req, res, next) {
    res.json('API is working properly');
});
module.exports = router;