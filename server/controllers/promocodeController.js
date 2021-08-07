const {PromoCode, PromoUsages} = require('../models/models')
const ApiError = require('../error/ApiError');

class PromocodeController {
    async create(req, res) {
        const {name} = req.body
        const promo = await PromoCode.create({name})
        return res.json(promo)
    }

    async get(req, res) {

    }

    async getAll(req, res) {

    }

    // async delete_promo(req, res) {
    //
    // }
}

module.exports = new PromocodeController()