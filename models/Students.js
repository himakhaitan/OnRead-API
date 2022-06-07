const sequelize = require("../dbConnection");
const { DataTypes } = require("sequelize");

const Students = sequelize.define();

module.exports = Students;
