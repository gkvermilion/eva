const ApiError = require('../error/ApiError');
const connectionService = require('../services/connectionService')

class ConnectionController {//связь пользователя
    async create(req, res) {
        await connectionService.create()
    }

    async get(req, res) {
        await connectionService.get()
    }

    async getAll(req, res) {
        await connectionService.getAll()
    }
}

module.exports = new ConnectionController()