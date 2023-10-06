
const getAll = (req,resp)=>{
    resp.json({message:'METHOD USER GET'});
}

const createUser = (req,resp)=>{
    /**
     * REQUEST BODY => request body => object
     * 
     * HEADER PARAMS => request headers => object
     */

    console.log(req.body);
    console.log(req.headers);
    resp.json({message:'METHOD USER POST', header:req.headers});
}


const deleteUser = (req,resp)=>{
    resp.json({message:'METHOD USER DELETE'});
}


const updateUser = (req,resp)=>{
    resp.json({message:'METHOD USER UPDATE'});
}

const filterUser =(req,resp)=>{
    // ROUTER DYNAMIC
    // req => params => object route dynamic {id,name}

    // PARAMS QUERY  request => query => object
    console.log(req.params)
    console.log(req.query)
    resp.json({message:'ROUTE DYNAMIC', params:req.params, query:req.query}); 
}

module.exports = {getAll,createUser,deleteUser,updateUser,filterUser}