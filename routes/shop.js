const express = require('express');

const router = express.Router();


//the use helps us to add a middleware function
router.use('/', (req, res, next) => {
    res.send('<h1>HEY JOSHUA IS CURRENTLY BUSY</h1>');

});
module.exports = router;