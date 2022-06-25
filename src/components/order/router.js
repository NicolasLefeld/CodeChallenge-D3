const router = require("express").Router();
const { getOrders, getOrder, postOrder } = require("./controller");

router

  .get("/", async (req, res) => {
    const { status, body } = await getOrders();

    res.status(status).json(body);
  })

  .get("/:id", async (req, res) => {
    const { id: orderId } = req.params;

    const { status, body } = await getOrder(orderId);

    res.status(status).json(body);
  })

  .post("/", async (req, res) => {
    const { cartId, products } = req.body;
    const { status, body } = await postOrder(cartId, products);

    res.status(status).json(body);
  });

module.exports = router;
