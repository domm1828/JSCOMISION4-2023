const express = require('express');
const routers = express.Router();
const {getAll,createUser,deleteUser,updateUser,filterUser} = require('../controllers/users.controller');
const validateUser = require('../request/users.request');


/** SEND DATA
 * ROUTER DYNAMIC
 */

routers.get('/:id/:name',filterUser);

routers.get('/', getAll);

routers.post('/',validateUser, createUser);

routers.put('/:id',updateUser);

routers.delete('/:id',deleteUser);

module.exports = routers;