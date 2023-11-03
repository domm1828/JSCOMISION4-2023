const express = require('express'); 
const { createAddress, getAll, updateAddress, deleteAddress } = require('../controllers/addresUser.controller');
const routers = express.Router();
 
 
/** GET ADDRESS */
routers.get('/', getAll);

/** CREATE ADDRESS */
routers.post('/',createAddress);

/** UPDATE ADDRESS */
routers.put('/:id',updateAddress);

/** DELETE ADDRESS */
routers.delete('/:id',deleteAddress);

module.exports = routers;