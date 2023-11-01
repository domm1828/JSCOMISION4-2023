const express = require('express');
const { createProduct, updateProduct, deleteProduct, getAll } = require('../controllers/products.controller');

const uploadStorage = require('../config/upload.single');
const validateProducts = require('../request/products.request');
const routers = express.Router();
 
 
/** GET PRODUCTS */
routers.get('/', getAll);

/** CREATE PRODUCT */
routers.post('/',uploadStorage.single("photo"),createProduct);

/** UPDATE PRODUCTS */
routers.put('/:id',uploadStorage.single("photo"),updateProduct);

/** DELETE PRODUCT */
routers.delete('/:id',deleteProduct);

module.exports = routers;