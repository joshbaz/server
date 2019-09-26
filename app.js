const http = require('http');

const express = require('express');

const app = express();

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