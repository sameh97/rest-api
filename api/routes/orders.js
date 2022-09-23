const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to /orders"
    })
})

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to /orders",
        id: req.params.id
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Order was created"
    })
})

router.put('/', (req, res, next) => {

})

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: `Order with id: ${req.params.id} was deleted`,
        id: req.params.id
    })
})

module.exports = router;