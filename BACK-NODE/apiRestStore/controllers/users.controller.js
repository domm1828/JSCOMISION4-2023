const db = require("../models");
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const getAll = async (req, resp) => {

    try {

        let filterParam = [];
        let filter = { attributes: { exclude: ['password'] } }
        if (req.query.first_name) {
            filterParam.push({
                first_name: {
                    [Op.substring]: `${req.query.first_name}`
                }
            })
        }
        if (req.query.last_name) {
            filterParam.push({
                last_name: {
                    [Op.substring]: `${req.query.last_name}`
                }
            })
        }
        if (req.query.email) {
            filterParam.push({
                email: {
                    [Op.substring]: `${req.query.email}`
                }
            })
        }
        if (filterParam.length > 0) {
            filter = {
                where: {
                    [Op.or]: filterParam
                },
                attributes: { exclude: ['password'] }
            }
        }
        let user = await db.user.findAll(filter);
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
        let user = await db.user.create(body);
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

        await db.user.findAll({ where: { id: id } }).then(async (result) => {

            if (result.length > 0) {
                await db.user.destroy({
                    where: {
                        id: id
                    }
                });
                resp.status(200).json({ error: false, message: 'DELETE USER', data: null });
            }
            else {
                resp.status(404).json({ error: true, message: 'ID USER NOT FOUND', data: null });
            }
        })
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}


const updateUser = async (req, resp) => {

    try {
        let id = req.params.id;
        await db.user.findAll({ where: { id: id } }).then(async (result) => {
            if (result.length > 0) {
                
                let body = req.body;
                if(body.password){
                    body.password = bcrypt.hashSync(body.password, 10);
                }

                await db.user.update(body, { where: { id: id } });
                resp.status(200).json({ error: false, message: 'Data user Update', data: null });
            }
            else {
                resp.status(404).json({ error: true, message: 'ID USER NOT FOUND', data: null });
            }
        })
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}

 

module.exports = { getAll, createUser, deleteUser, updateUser }