const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "to_do_list_db",
});
module.exports = connection;
