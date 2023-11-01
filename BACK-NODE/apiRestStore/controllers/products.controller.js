const db = require("../models");
const { Op } = require('sequelize');
const Products = db.product;
const fs = require("fs");

const getAll = async (req, resp) => {

    try {
        let product = await Products.findAll();
        resp.status(200).json({ error: false, message: 'List Products', data: product });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }
}

const createProduct = async (req, resp) => {

    try {
        let body = req.body
        if (req.file) {
            body.photo = "public/images/" + req.file.filename;
        }
        console.log(body);
        let product = await Products.create(body);
        resp.status(200).json({ error: false, message: 'Data Product Save', data: product });
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}

const deleteProduct = async (req, resp) => {

    try {
        let id = req.params.id;

        let product = await Products.findByPk(id);
        if (product) {
            await Products.destroy({ where: { id: id } });
            resp.status(200).json({ error: false, message: 'Product Delete', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'Id Product not found' });
        }
        /*
        await Products.findAll({ where: { id: id } }).then(async (result) => {
            if (result.length > 0) {
                await Products.destroy({ where: { id: id } });
                resp.status(200).json({ error: false, message: 'Product Delete', data: null });
            }
            else {
                resp.status(404).json({ error: true, message: 'Id Product not found' });
            }
        });*/
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }
}

const updateProduct = async (req, resp) => {

    try {
        let id = req.params.id;
        let product = await Products.findByPk(id);
        if (product) {
            let body = req.body
            if (req.file) {
                let urlPhoto = product.photo;
                fs.unlinkSync(urlPhoto);
                body.photo = "public/images/" + req.file.filename;
            }
            await Products.update(body, { where: { id: id } });
            resp.status(200).json({ error: false, message: 'Product Modificado', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'Id Product not found' });
        }

        /*  await Products.findAll({ where: { id: id } }).then(async (result) => {
              if (result.length > 0) {
                  let body = req.body
                  if (req.file) {
                      let urlPhoto = result[0]['photo'];
                      fs.unlinkSync(urlPhoto);
                      body.photo = "public/images/" + req.file.filename;
                  }
                  await Products.update(body,{where:{id:id}});
                  resp.status(200).json({ error: false, message: 'Product Modificado', data: null });
              }
              else {
                  resp.status(404).json({ error: true, message: 'Id Product not found' });
              }
          });*/
    }
    catch (e) {
        console.log(e);
        resp.status(400).json({ error: true, message: e });
    }

}

module.exports = { getAll, createProduct, deleteProduct, updateProduct }