const mysql = require("mysql2");

//createConnection

const pool = mysql.createPool({
    host: proccess.env.HOST_DB,
    user: process.env.USER_DB,
    password:process.env.PASS_DB,
    port: process.env.PORT_DB,
    database:process.env.DB
});



module.exports = pool.promise();