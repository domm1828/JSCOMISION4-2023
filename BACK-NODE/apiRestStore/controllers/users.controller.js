const db = require("../models");
const bcrypt = require('bcrypt');

const getAll = async(req, resp) => {
  
    try{
        let user = await db.user.findAll({attributes:{exclude:['password']}});
        resp.status(200).json({ error: false, message: 'FIND ALL', data: user });
    }
    catch(e){
        resp.status(400).json({ error: true, message: e });
    }
    
}

const createUser = async (req, resp) => {
    try {
        let  body = req.body;
        body.password= bcrypt.hashSync(body.password,10);
        let user = await db.user.create(body);
        resp.status(200).json({ error: false, message: 'Data user Save', data: user });
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }
}


const deleteUser = async(req, resp) => {
    
    try{
        let id = req.params.id;
            await db.user.destroy({
                where:{
                    id:id
                }
            });
            resp.status(200).json({ error: false, message: 'DELETE USER', data: null });
    }
    catch(e){
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }
    
}


const updateUser = async (req, resp) => {
    
    try{
        let id=req.params.id;

            let user = db.user.update(req.body,{where:{id:id}});
            resp.status(200).json({ error: false, message: 'Data user Update', data: user });
    }
    catch(e){
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}

const filterUser = (req, resp) => {
    // ROUTER DYNAMIC
    // req => params => object route dynamic {id,name}

    // PARAMS QUERY  request => query => object
    console.log(req.params)
    console.log(req.query)
    resp.json({ message: 'ROUTE DYNAMIC', params: req.params, query: req.query });
}

module.exports = { getAll, createUser, deleteUser, updateUser, filterUser }