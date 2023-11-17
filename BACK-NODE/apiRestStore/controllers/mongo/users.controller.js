const bcrypt = require('bcrypt');
const User = require('../../models/mongo/user');

const getAll = async (req, resp) => {

    try {

        let filter = { 
        };
        if(req.query.first_name){
            let regex = new RegExp(req.query.first_name)
            console.log(regex)
            filter = {
                $or:[
                    {first_name:regex},
                    {last_name:regex}
                ]
                 
            };
        }
        /**
         * donde contenga el criterio /criterio/
         * donde comienze con el criterio /^criterio/
         * donde finalize con el criterio /criterio$/
         * donde sea igual
         * $regex :{ criterio}
         *   name:{ $regex:/criterio/i }
         * sort ordenamiento asc 1 desc -1
         * $or :[ ]
         * $and :[]
         */
        
        let user = await User.find(filter,{first_name:1}).sort({first_name:1});
        resp.status(200).json({ error: false, message: 'FIND ALL', data: user });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }

}
 
const createUser = async (req, resp) => {
    try {
        let body = req.body;
        body.password = bcrypt.hashSync(body.password, 10);
        let user = new User(body);
        user.save();
        resp.status(200).json({ error: false, message: 'Data user Save', data: user });
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }
}


const deleteUser = async (req, resp) => {

    try {
        let id = req.params.id;

        let user = await User.findById(id);

        if (user) {
            await User.findByIdAndDelete(id);
            resp.status(200).json({ error: false, message: 'Data user delete', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'ID USER NOT FOUND', data: null });
        }
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}


const updateUser = async (req, resp) => {

    try {
        let id = req.params.id;
        let user = await User.findById(id);

        if (user) {

            let body = req.body;
            if (body.password) {
                body.password = bcrypt.hashSync(body.password, 10);
            }
            await User.updateOne({_id:id}, body)
            resp.status(200).json({ error: false, message: 'USUARIO MODIFICADO', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'ID USER NOT FOUND', data: null });
        }
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}


const getById = async (req, resp) => {
    try {
        let id = req.params.id;

        let user = await User.findById(id);

        if (user) {
            resp.status(200).json({ error: false, message: 'Data user', data: user });
        }
        else {
            resp.status(404).json({ error: true, message: 'ID USER NOT FOUND', data: null });
        }
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}


module.exports = { getAll, createUser, deleteUser, updateUser, getById }