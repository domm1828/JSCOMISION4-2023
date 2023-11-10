const bcrypt = require('bcrypt');
const User = require('../../models/mongo/user');

const getAll = async (req, resp) => {

    try {

        let user = await User.find();
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