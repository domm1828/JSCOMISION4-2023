const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');

const validateUser = (req,res,next)=>{

    const schema = Joi.object({
        email:Joi.string().email().max(45).required().messages({
            'string.empty':'El email es requerido',
            'string.email':'Debes ingresar un correo valido'
        }),
        password:Joi.string().min(6).max(45).required(),
        dni:Joi.number().integer(),
        first_name:Joi.string().max(45).required(),
        last_name:Joi.string().max(45).required(),
        type_user:Joi.number().integer()
    });

    validateRequest(req,res,next,schema);
    
}
module.exports = validateUser;