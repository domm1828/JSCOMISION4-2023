const db = require("../models");
const { Op } = require('sequelize');

const getAll = async (req, resp) => {

}

const createProduct = async (req, resp) => {

    try {
        let body = req.body
        if(req.file){
            body.photo = "public/images/"+req.file.filename;
        }
        console.log(body);
        let product = await db.product.create(body);
        resp.status(200).json({ error: false, message: 'Data Product Save', data: product });
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }
   
}

const deleteProduct = async (req, resp) => {

}

const updateProduct = async (req, resp) => {

}

module.exports = { getAll, createProduct, deleteProduct, updateProduct }