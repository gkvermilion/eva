const adminService = require('../services/adminService');
const ApiError = require('../error/ApiError');

class AdminController {
    async changeRole(req, res, next) {
        try {
            const {email, role} = req.body;
            const upgrade = await adminService.changeRole(email, role);
            return res.json(upgrade);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AdminController()