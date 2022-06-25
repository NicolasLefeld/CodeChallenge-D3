const Order = require("../../models/order");

async function retrieveOrders() {
  return Order.findAll({ attributes: ["id"] });
}

async function retrieveOrder(orderId) {
  return Order.findAll({
    attributes: ["products"],
    where: {
      id: orderId,
    },
  });
}

async function insertOrder(cartId, products) {
  return Order.create({
    cart_id: cartId,
    products,
  });
}

module.exports = {
  retrieveOrders,
  retrieveOrder,
  insertOrder,
};
