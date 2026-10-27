const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../utils/.env') });

const mongoUri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/mongodb';

const connection = mongoose.connect(mongoUri);

module.exports = {
    connection
};