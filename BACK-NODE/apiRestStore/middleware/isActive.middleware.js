const isActive = (req,res,next)=>{

    if(req.headers.isactive=='1'){
        next();
    }
    else{
        res.status(401).send({message:'Error de Acceso'});
    }

}

module.exports = isActive