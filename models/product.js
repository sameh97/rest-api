const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    serialNumber: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: String, required: true },
    status: { type: String, required: true },
    categoryID: { type: Number, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, required: true },
})

module.exports = mongoose.model("Product", productSchema);