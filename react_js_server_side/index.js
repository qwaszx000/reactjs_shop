const express = require("express");
const mysql = require("mysql");
const path = require("path");

//connect to mysql
const mysql_username = 'tmp';
const mysql_host = 'localhost';
const mysql_pass = 'tmp_pass';
const mysql_db = 'tmp';
var con = mysql.createConnection({
	host: mysql_host,
	user: mysql_username,
	password: mysql_pass,
	database: mysql_db
});

con.connect((err) => {
	if(err) throw err;
	console.log(`Connected to mysql as ${mysql_username}@${mysql_host} at database "${mysql_db}"`);

	con.end((err) => {if(err) throw err;});
});

//Start express server
const express_app = express();
const port = process.argv[2] || 3000;

express_app.get('*', (req, res) => {
});

express_app.listen(port, () => {
	console.log(`Listening began on : http://localhost:${port}/`);
});
