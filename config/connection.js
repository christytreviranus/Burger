//MySQL
const mysql = require('mysql');

//Create Connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'enter password',
    database: 'burgers_db'
});

//Make the connection to the database
connection.connect(function(err){
    if (err) {
        console.error('There was an error connecting to the database: ' + err.stack);
        return;
    }
    console.log('You are connected tot he database ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
