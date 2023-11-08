const express = require('express');
const routers = express.Router();
const {getAll,createUser,deleteUser,updateUser, getById} = require('../controllers/users.controller');
const validateUser = require('../request/users.request');


/** SEND DATA
 * ROUTER DYNAMIC
 */

 

routers.get('/', getAll);

routers.post('/',validateUser, createUser);

routers.put('/:id',updateUser);

routers.delete('/:id',deleteUser);

routers.get('/:id',getById);

module.exports = routers;