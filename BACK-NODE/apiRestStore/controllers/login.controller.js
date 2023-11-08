const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require("../models");
const User = db.user;


const login = async (req, resp) => {
    try {
        User.findOne({ where: { email: req.body.email } }).then((user) => {

            if (!user) {
                return resp.status(401).json({ error: true, message: 'User and password not found' });
            }

            let passwordValidate = bcrypt.compareSync(req.body.password, user.password);

            if (!passwordValidate) {
                return resp.status(401).json({ error: true, message: 'password and User not found' });
            }

            let token = jwt.sign({ id: user.id }, "abcdefghijklmnopqrstuvwxyz", {
                expiresIn: 60
            });

            let data ={user,token}
            resp.status(200).json({ error: false, message: 'ACCESS', data: data });
        });


    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }
}

module.exports = login;