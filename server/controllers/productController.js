const {Product} = require('../models/models')
const {where} = require("sequelize");

class ProductController {
    async create(req, res) {
        const {price,/*price, name, mmr и тд*/} = req.body
        const product = await Product.create({price})
        return res.json(product)
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page*limit - limit

        const products = await Product.findAll({limit, offset})
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = Product.findOne(

        )
        return res.json(products)
    }

    // async delete_product(req, res) {
    //
    // }
}

module.exports = new ProductController()