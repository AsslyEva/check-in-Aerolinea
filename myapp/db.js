
const {createPool} = require('mysql2/promise');
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;
console.log("data base", DB_DATABASE);
const pool = createPool({
    host: DB_HOST || 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: DB_USER || 'bsale_test',
    password: DB_PASSWORD || 'bsale_test',
    port: DB_PORT || 3306,
    database: DB_DATABASE || 'airline'
});

// console.log(pool)

module.exports = pool;