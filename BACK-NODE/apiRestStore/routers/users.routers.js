const express = require('express');
const routers = express.Router();
const {getAll,createUser,deleteUser,updateUser} = require('../controllers/users.controller')

routers.get('/', getAll);

routers.post('/', createUser);

routers.put('/',updateUser);

routers.delete('/',deleteUser);

module.exports = routers;