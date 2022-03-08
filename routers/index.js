const express = require('express');
const productsRoutes = require('./products/products.routes');
const cartRoutes = require('./cart/cart.routes');


const router = express.Router();


//Routes
router.use('/products', productsRoutes);
router.use('/cart', cartRoutes)


module.exports = router;