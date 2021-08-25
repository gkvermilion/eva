const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const {User} = require('../models/models')

class UserController {
    async registration(req, res, next) {
        try{

        }catch (e) {
            console.log(e);
        }
    }

    async login(req, res, next) {
        try{

        }catch (e) {
            console.log(e);
        }
    }

    async logout(req, res, next) {
        try{

        }catch (e) {
            console.log(e);
        }
    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()