const express = require('express');
const routers = express.Router();
 const validateUser = require('../../request/users.request');
const { getAll,createUser,updateUser,deleteUser,getById} = require('../../controllers/mongo/users.controller');


/** SEND DATA
 * ROUTER DYNAMIC
 */

 

routers.get('/', getAll);

routers.post('/',validateUser, createUser);

routers.put('/:id',updateUser);

routers.delete('/:id',deleteUser);

routers.get('/:id',getById);

module.exports = routers;