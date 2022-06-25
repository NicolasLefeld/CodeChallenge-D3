const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConection");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cart_id: {
    type: DataTypes.INTEGER,
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  }
});

Order.sync({ force: true });

module.exports = Order;
