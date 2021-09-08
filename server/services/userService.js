const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mailService')
const tokenService = require('./tokenService')
const UserDto = require("../dtos/userDto");

class userService {
    async registration(email, password) {
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await User.create({email: email, password: hashPassword, activationLink: activationLink})
        await mailService.sendActivationMail(email, activationLink);
        // DTO = data transfer object
        const userDto = new UserDto(user); // id, email, iActivated
        const tokens = tokenService.generateTokens({...UserDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }
}

module.exports = new userService();