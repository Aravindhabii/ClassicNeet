const mysql = require('mysql');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
});
// const db = mysql.createConnection({
// 	host: "localhost",
// 	user: "classic_neet_academy",
// 	password: "Asdf@@123",
// 	database: "classic_neet_academy",
// });

module.exports = db;
