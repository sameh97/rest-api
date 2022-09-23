const express = require('express')
const productsController = require('./../../controllers/products-controller');
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling products GET request'
    })
});


router.post('/', productsController.create)
// (req, res, next) => {
//     res.status(201).json({
//         message: 'handling products POST request'
//     })
// }
router.put('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        message: 'handling products PUT request',
        id: id
    })
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        message: 'handling products DELETE request',
        id: id
    })
})

module.exports = router;