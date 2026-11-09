require('dotenv').config();
const mysql = require('mysql2/promise');

// Un "pool" mantiene varias conexiones abiertas y las reutiliza
const pool = mysql.createPool({
  host: process.env.TIDB_HOST,
  port: process.env.TIDB_PORT,
  user: process.env.TIDB_USER,
  password: process.env.TIDB_PASSWORD,
  database: process.env.TIDB_DATABASE,
  ssl: { minVersion: 'TLSv1.2', rejectUnauthorized: true }, // TLS obligatorio en TiDB
  waitForConnections: true,
  connectionLimit: 5
});

module.exports = pool;