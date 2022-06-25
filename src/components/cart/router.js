const router = require("express").Router();
const { getCarts, getCart, postCarts } = require("./controller");

router

  .get("/", async (req, res) => {
    const { status, body } = await getCarts();

    res.status(status).json(body);
  })

  .get("/:id", async (req, res) => {
    const { id } = req.params;

    const { status, body } = await getCart(id);

    res.status(status).json(body);
  })

  .post("/products", async (req, res) => {
    const { userId, productId } = req.body;

    const { status, body } = await postCarts(userId, productId);

    res.status(status).json(body);
  });

module.exports = router;
