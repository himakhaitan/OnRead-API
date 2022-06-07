const sequelize = require("../dbConnection");
const { DataTypes } = require("sequelize");

const Students = sequelize.define(
  "Student",
  {
    reg_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    roll_num: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    books: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue("books").split(";");
      },
      set(val) {
        this.setDataValue("books", val.join(";"));
      },
    },
  },
  {
    timestamps: true,
    tableName: "students",
  }
);

module.exports = Students;
