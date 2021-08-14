const {PromoCode} = require('../models/models')
const ApiError = require('../error/ApiError');

class PromocodeController {
    async create(req, res) {
        const {name} = req.body
        const promo = await PromoCode.create({name})
        return res.json(promo)
    }

    async getAll(req, res) {
        const promos = await PromoCode.findAll()
        return res.json(promos)
    }

    // async delete_promo(req, res) {
    //
    // }
}

module.exports = new PromocodeController()