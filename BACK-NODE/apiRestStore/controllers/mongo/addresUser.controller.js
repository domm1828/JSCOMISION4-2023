const Address = require("../../models/mongo/address");

 

const getAll = async (req, resp) => {

    try {
        let address = await Address.find().populate('users_id');
        resp.status(200).json({ error: false, message: 'Address List', data: address });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }
}

const createAddress = async (req, resp) => {

    try {
        
        let address = new Address(req.body);
        address.save();
        resp.status(200).json({ error: false, message: 'Address Save', data: address });
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}

const deleteAddress = async (req, resp) => {

    resp.status(200).json({ error: false, message: 'Address Delete', data: null });
}

const updateAddress= async (req, resp) => {

    resp.status(200).json({ error: false, message: 'UPDATE Address', data: null });

}

module.exports = { getAll, createAddress, deleteAddress, updateAddress }