const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));


const server = http.createServer(app);

server.listen(4000);