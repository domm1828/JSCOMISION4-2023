const express = require('express'); 
const { getAll,createAddress } = require('../../controllers/mongo/addresUser.controller');
 const routers = express.Router();
 
 
/** GET ADDRESS */
routers.get('/', getAll);

/** CREATE ADDRESS */
routers.post('/',createAddress);

 
module.exports = routers;