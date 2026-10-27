const express = require("express");
const { products } = require("../controllers/product.controller");

const productsRouter = express.Router();

productsRouter.post("/", products);

module.exports = { productsRouter };
