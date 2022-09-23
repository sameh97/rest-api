const productsService = require('./../services/products-service');

module.exports = {
    create: (req, res, next) => {
        let productToCreate = null;
        try {
            productToCreate = req.body;

            const createdProduct = productsService.create(productToCreate);

            res.status(201);

            next(createdProduct);
        } catch (error) {
            // TODO: add logger
            next(error);
        }
    }
}