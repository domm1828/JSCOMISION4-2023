const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');

const validateProducts = (req,resp,next) =>{

    const schema = Joi.object({
        code:Joi.string().required().min(3),
        name:Joi.string().required().min(3),
        stock:Joi.number().integer().required(),
        amount:Joi.number().required(),
    });

    validateRequest(req,resp,next,schema);

}
module.exports = validateProducts;