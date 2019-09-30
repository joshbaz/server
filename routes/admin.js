const express = require('express');
const Router = express.Router();

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">click Me</button></form>')
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;