const express = require('express')
const app = express()
const morgan = require('morgan')


const productsRouter = require('./api/routes/products.js')
const ordersRouter = require('./api/routes/orders.js')

app.use(morgan())

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter)

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works'
    })
})

module.exports = app;