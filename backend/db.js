const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "database-1.cl6oe4q0sod0.ap-south-1.rds.amazonaws.com", // RDS Endpoint
    user: "admin", // RDS Username
    password: "anupriya2003", // RDS Password
    database: "database-1", // Your database name in RDS
    multipleStatements: true
});

// Connecting to the RDS Database
db.connect((err) => {
    if (err) {
        console.error("Database Connection Failed:", err);
    } else {
        console.log("Connected to AWS RDS MySQL Database");
    }
});

module.exports = db;

// module.exports = db;

// const mysql = require("mysql2");
// require("dotenv").config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   ssl: {
//     rejectUnauthorized: process.env.DB_SSL === 'true', // Ensures secure SSL connection
//   },
// });

// db.connect((err) => {
//   if (err) {
//     console.error("❌ Database Connection Failed:", err);
//   } else {
//     console.log("✅ Connected to PlanetScale MySQL Database!");
//   }
// });

// module.exports = db;
