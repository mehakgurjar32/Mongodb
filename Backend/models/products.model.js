const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  actualPrice: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: ''
  },
  inStock: {
    type: Boolean,
    default: true
  },
  category: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  stockQuantity: {
    type: Number,
    required: true,
    default: 0
  }
});

const productModel = mongoose.model('Product', productSchema);

module.exports = { productModel };