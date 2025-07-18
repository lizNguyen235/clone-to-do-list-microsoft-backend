const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("to_do_list_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Tắt log SQL nếu không muốn nó in ra console
});

module.exports = sequelize;
