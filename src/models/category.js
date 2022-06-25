const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConection");

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

//Category.sync({ force: true });

module.exports = Category;
