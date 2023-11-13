const mysql = require('mysql');
const db = mysql.createConnection({
    host: "llm.zuofx.xyz",
    user: "huy",
    password: "",
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
