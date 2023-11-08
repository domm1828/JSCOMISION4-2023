const express = require('express');
const { createProduct, updateProduct, deleteProduct, getAll } = require('../controllers/products.controller');

const uploadStorage = require('../config/upload.single');
const validateProducts = require('../request/products.request');
const validateToken = require('../middleware/auth.jwt.middleware');
const routers = express.Router();
 
 
/** GET PRODUCTS */
routers.get('/', getAll);

/** CREATE PRODUCT */
routers.post('/',validateToken,uploadStorage.single("photo"),createProduct);

/** UPDATE PRODUCTS */
routers.put('/:id',validateToken,uploadStorage.single("photo"),updateProduct);

/** DELETE PRODUCT */
routers.delete('/:id',validateToken,deleteProduct);

module.exports = routers;