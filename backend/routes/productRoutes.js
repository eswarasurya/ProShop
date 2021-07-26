const express = require('express')
const router = express.Router()
const {getProducts, getProductById, deleteProduct, createProduct, updateProduct} = require('../controllers/productController')
const {protect, admin} = require('../middleware/authMiddleware')

router.get('/',getProducts)
router.post('/',protect, admin, createProduct)

router.get('/:id', getProductById)
router.delete('/:id', protect, admin, deleteProduct)
router.put('/:id', protect, admin, updateProduct)

module.exports = router