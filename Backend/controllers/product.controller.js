const { productModel } = require("../models/products.model");

const products = async (req, res) => {
    const {
        name,
        actualPrice,
        desc,
        rating,
        image,
        inStock,
        category,
        discount,
        stockQuantity
    } = req.body;

    try {
        const product = new productModel({
            name,
            actualPrice,
            desc,
            rating,
            image,
            inStock,
            category,
            discount,
            stockQuantity
        });

        await product.save();

        res.status(200).send({ message: "Product saved", data: product });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = { products };