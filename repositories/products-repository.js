const productModel = require('./../models/product');
const AppUtils = require('./../common/app-utils')
module.exports = {
    save: async (product) => {
        let productInDB = null;

        await productModel.findOne({ serialNumber: product.serialNumber }, (err, product) => {
            productInDB = product;
        })

        // TODO: make apputils has value function
        if (AppUtils.hasValue(productInDB)) {
            // TODO: replace Error with allready exists error
            throw new Error(`Product with serial number '${product.serialNumber}' already exist`)
        }

        const createdProduct = new productModel({
            name: product.name,
            description: product.description,
            quantity: product.quantity,
            categoryID: product.categoryID,
            status: product.status,
            serialNumber: product.serialNumber,
            price: product.price,
            imgUrl: product.imgUrl,
        })
        await createdProduct.save();

        return createdProduct;
    }
}