const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConection");

const Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  }
});

//Cart.sync({ force: true });

module.exports = Cart;
