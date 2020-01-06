//const http = require('http');

const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const errorController = require('./controllers/error');

//importation of the database
const mongoConnect = require('./util/database').mongoConnect;

const app = express();


app.set('view engine', 'ejs');
app.set('views',"views");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
//execution of mongoConnect
/*
**and also get access to the client object
**once connected to the database then then the port is made active
*/
/*
******* fuction ********
mongoConnect(client => {
    console.log(client);
    app.listen(5000);
})
*************************
** the fuction above works when the client in the database util file is run in the callback
** callback(client) --- like that
** other than that..
** then the execution below is right and hence rightful connection to the database
*/

mongoConnect(() => {
    app.listen(5000);
})
//app.listen(5000);