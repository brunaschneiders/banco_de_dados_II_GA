const Sequelize = require("sequelize");
const sequelize = new Sequelize("libraryManagement", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
