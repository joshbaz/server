const path = require('path');
const express = require('express');

const router = express.Router();


//the use helps us to add a middleware function
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,  '../','views', 'shop.html'));

});
module.exports = router;