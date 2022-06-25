require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/status", (req, res) => {
  res.send("OK");
});
app.use("/cart", require("./components/cart/router"));
app.use("/order", require("./components/order/router"));

module.exports = app;
