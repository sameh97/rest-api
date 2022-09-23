const productsRepository = require('./../repositories/products-repository');

module.exports = {
    create: (product) => {
        try {
            const createdProduct = productsRepository.save(product);

            //TODO: create a logger
            console.log(`Created product with id: ${createdProduct._id}`);

            return createdProduct;
        } catch (err) {
            throw err;
        }
    }
}