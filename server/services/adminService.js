const {User} = require('../models/models')
const ApiError = require('../error/ApiError')

class AdminService {
    async changeRole(email, new_role) {
        const user = await User.findOne({where: {email}});
        if (!user) {
            throw ApiError.badRequest('Нет такого пользователя');
        }
        user.role = new_role;
        await user.save();
    }
}

module.exports = new AdminService()