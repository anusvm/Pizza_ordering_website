const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userscart",
    multipleStatements:true
});

db.connect((err) => {
    if (err) {
        console.error("Database Connection Failed:", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

module.exports = db;
