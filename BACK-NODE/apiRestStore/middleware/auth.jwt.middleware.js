const jwt = require('jsonwebtoken');

const validateToken = (req,resp,next) =>{

    let token = req.headers["x-access-token"];

    if(!token){
         return resp.status(403).json({ error: true, message: 'ERROR TOKEN' });
    }
    jwt.verify(token,"abcdefghijklmnopqrstuvwxyz",(error,decode)=>{

            if(error){
                 return resp.status(403).json({ error: true, message: 'ERROR TOKEN' });     
            }

            req.UserId = decode.id
            next();

    });
}
module.exports = validateToken