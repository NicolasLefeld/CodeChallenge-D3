const { retrieveOrders, retrieveOrder, insertOrder } = require("./request");
const { getCart } = require("../cart/controller");

const getOrders = async () => {
  const orders = await retrieveOrders();

  return orders.length
    ? { status: 200, body: orders }
    : { status: 404, body: [] };
};

const getOrder = async (orderId) => {
  const order = await retrieveOrder(orderId);

  return order.length
    ? { status: 200, body: order }
    : { status: 404, body: "Any order found" };
};

const postOrder = async (cartId) => {
  const { body: cart } = await getCart(cartId);

  if (cart.dataValues) {
    console.log(cart.dataValues.products);
    const orderInserted = await insertOrder(cartId, cart.dataValues.products);

    return orderInserted
      ? { status: 201, body: orderInserted }
      : { status: 500 };
  }

  return { status: 404, body: "Cart not found" };
};

module.exports = {
  getOrders,
  getOrder,
  postOrder,
};
