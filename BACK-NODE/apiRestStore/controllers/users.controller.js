
const getAll = (req,resp)=>{
    resp.json({message:'METHOD USER GET'});
}

const createUser = (req,resp)=>{
    resp.json({message:'METHOD USER POST'});
}


const deleteUser = (req,resp)=>{
    resp.json({message:'METHOD USER DELETE'});
}


const updateUser = (req,resp)=>{
    resp.json({message:'METHOD USER UPDATE'});
}

module.exports = {getAll,createUser,deleteUser,updateUser}