const validateRequest = (req,resp,next,schema) =>{

    const options ={
        abortEarly :false,
        allowUnknown:true,
        stripUnknown: true
    }
    const {error,value} = schema.validate(req.body,options);

    if(error){
        console.log(error)
        const message = error.details.map(x=>x.message);
        console.log(message);
        resp.status(400).json({message});
    }
    else{
        req.body = value;
        next();
    }


}

module.exports = validateRequest;