const mysql = require('mysql');

require('dotenv').config()


// ENSURE THAT YOU CREATE A .ENV FILE!
const db = mysql.createConnection({
    host: "rlm.zuofx.xyz",
    user: "huy",
    password: process.env.PASSWORD,
    database:"qgdc"
})

db.connect(function(err) {
    if (err) throw err;

    db.query("SELECT * FROM blogs", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    }); 
});

module.exports = db;
