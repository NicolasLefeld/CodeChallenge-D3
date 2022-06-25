const Cart = require("../../models/cart");
const { sequelize } = require("../../config/dbConection");

const retrieveCarts = () => {
  return Cart.findAll({
    attributes: ["id"],
  });
};

const retrieveCart = (id, retrieveBy) => {
  return Cart.findAll({
    where: {
      [`${retrieveBy}`]: id,
    },
  });
};

async function insertCart(userId, productId) {
  return Cart.create({
    user: userId,
    products: [productId],
  });
}

async function updateCart(userId, productId) {
  return Cart.update(
    {
      products: sequelize.fn(
        "array_append",
        sequelize.col("products"),
        productId
      ),
    },
    { where: { user: userId } }
  );
}

module.exports = {
  retrieveCarts,
  retrieveCart,
  updateCart,
  insertCart,
};
