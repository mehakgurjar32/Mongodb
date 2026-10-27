const Payment = require("../models/payment.model");

const paymentData = async (req, res) => {
    const { user, amount, currency, status } = req.body;

    if (!user || !amount || !currency) {
        return res.status(400).send({ message: "user, amount, and currency are required" });
    }

    try {
        const payment = new Payment({ user, amount, currency, status });
        await payment.save();
        res.status(200).send({ message: "Payment saved", data: payment });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { paymentData };
        