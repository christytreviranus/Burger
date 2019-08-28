//MySQL
const mysql = require('mysql');
let connection;

//Use Dotenv package
require("dotenv").config();

if (process.env.JAWSDB_URL){
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
//Create Connection to database
connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.MYSQL_UN,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});
};

//Make the connection to the database
connection.connect(function(err){
    if (err) {
        console.error('There was an error connecting to the database: ' + err.stack);
        return;
    }
    console.log('You are connected to the database ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
