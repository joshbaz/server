const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

/*
**importation of the local database 
*/
const dbName = 'shopdb';
let _db;

/*
** Local Database successfully running
** connection method
*/

const mongoConnect = (callback) => {
    /*
    ** used to connect to mongodb
    ** connection to the database
    ** the url in the mongoClient.connect
    ** -is for the localhost connection of the db
    */
    MongoClient.connect('mongodb://127.0.0.1:27017')
        .then(client => {
            /*
            ** in the _db a value is stored in it
            ** access to the database is the value
            ** inside the client.db is the database 
            ** to which we wish to access
            */
            _db = client.db(dbName)
            console.log('connected successfully');
            console.log(`database: ${dbName}`)
            /*
            ** this allows us to connect to the database
            ** result is passed in the callback
            ** client object that gives us access to the database
            */
                /*
                ** fumction running
                ** A change to the function below
                ** the client object is eliminated
                ** so the callback is then empty
                ** hence running a variable let _db & client.db
                **    callback(client);
                */

            callback();
        })
        .catch(err => {
            console.log(err);
            /*
            ** on failure the error is thrown
            */
            throw err;
        });
};

/*
** instead of running returning the client in the callback
** another function is run to avoid double connection when models are being created
** thus the function below
*/
const getDb = () => {

    if (_db) {
        //return access to the database
        return _db;
    }
    throw 'No database found!!';
};

/*
**module.exports = mongoConnect;
** this module.exports is used to run only one exportation
** the one below represents the multiple
*/

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;