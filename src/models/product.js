const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConection");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    isIn: [["physical", "digital"]],
  },
  downloadURL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

//Product.sync({ force: true });

module.exports = Product;
