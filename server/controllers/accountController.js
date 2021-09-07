const account = require('../models/models')
const acc_service = require('../services/accountService')

class AccountController {
    async create(req, res) {
        await acc_service.create();
    }

    async get(req, res) {
        await acc_service.get();
    }

    async getAll(req, res) {
        await acc_service.getAll();
    }

    async delete(req, res) {
        await acc_service.delete();
    }
    async update(req, res) {
        await acc_service.update();
    }


}

module.exports = new AccountController()