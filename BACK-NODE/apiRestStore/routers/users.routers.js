const express = require('express');
const routers = express.Router();
const {getAll,createUser,deleteUser,updateUser,filterUser} = require('../controllers/users.controller')


/** SEND DATA
 * ROUTER DYNAMIC
 */

routers.get('/:id/:name',filterUser);

routers.get('/', getAll);

routers.post('/', createUser);

routers.put('/',updateUser);

routers.delete('/',deleteUser);

module.exports = routers;