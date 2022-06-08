const sequelize = require("../dbConnection");
const { DataTypes } = require("sequelize");

const Book = sequelize.define(
  "Book",
  {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      }
    },
    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    issuedBy: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Books",
    timestamps: true,
  }
);

module.exports = Book;
