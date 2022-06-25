const { retrieveCart, retrieveCarts, insertCart, updateCart } = require("./request");

const getCarts = async () => {
  const carts = await retrieveCarts();

  return carts ? { status: 200, body: carts } : { status: 404, body: [] };
};

const getCart = async (id) => {
  const cart = await retrieveCart(id, "id");

  return cart.length ? { status: 200, body: cart[0] } : { status: 404, body: [] };
};

const postCarts = async (userId, productId) => {
  const cart = await retrieveCart(userId, "user");

  if (cart.length) {
    const cartUpdated = await updateCart(userId, productId);


    return cartUpdated === 1
      ? { status: 200, body: "Updated" }
      : { status: 500, body: "Error while updating" };
  }
  const cartInserted = await insertCart(userId, productId);

  return { status: 201, body: cartInserted };
};

module.exports = {
  getCarts,
  getCart,
  postCarts,
};
