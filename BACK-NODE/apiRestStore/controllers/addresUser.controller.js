const db = require("../models");
const { Op } = require('sequelize');
const Address = db.address_user; 

const getAll = async (req, resp) => {

    try {
        let address = await Address.findAll({include:['userAddress']});
        resp.status(200).json({ error: false, message: 'Address List', data: address });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }
}

const createAddress = async (req, resp) => {

    try {
        
        let address = await Address.create(req.body);
        resp.status(200).json({ error: false, message: 'Address Save', data: address });
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}

const deleteAddress = async (req, resp) => {

    try {
        let id = req.params.id;

        let address = await Address.findByPk(id);
        if (address) {
            await Address.destroy({ where: { id: id } });
            resp.status(200).json({ error: false, message: 'Address Delete', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'Id Address not found' });
        }
       
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }
}

const updateAddress= async (req, resp) => {

    try {
        let id = req.params.id;
        let address = await Address.findByPk(id);
        if (address) {
           
            await Address.update(req.body, { where: { id: id } });
            resp.status(200).json({ error: false, message: 'UPDATE Address', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'Id Address not found' });
        }
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}

module.exports = { getAll, createAddress, deleteAddress, updateAddress }