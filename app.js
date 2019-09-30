const http = require('http');

const express = require('express');

const app = express();

app.use();

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"></button></form>')
})

//the use helps us to add a middleware function
app.use((req, res, next) => {
    console.log("in the middleware");
    next();
});

app.use((req, res, next) => {
    console.log("in another middleware");
});

const server = http.createServer(app);

server.listen(4000);