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
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: "Books",
    timestamps: true,
  }
);

module.exports = Book;
