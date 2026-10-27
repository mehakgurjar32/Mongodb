const express = require("express");
const { paymentData } = require("../controllers/payment.control");

const paymentRouter = express.Router();

paymentRouter.post("/", paymentData);

module.exports = { paymentRouter };