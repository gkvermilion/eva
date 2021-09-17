const ApiError = require('../error/ApiError');
const tokenService = require('../services/tokenService');

module.exports = function (role) {
    return function (req, res, next) {
        try {
            const authorizationHeader = req.headers.authorization;
            if (!authorizationHeader) {
                return next(ApiError.unauthorized())
            }

            const accessToken = authorizationHeader.split(' ')[1];
            if (!accessToken) {
                return next(ApiError.unauthorized())
            }

            const decoded = tokenService.validateAccessToken(accessToken);
            if (decoded.role !== role) {
                return next(ApiError.forbidden())
            }

            req.user = decoded;
            next();
        } catch (e) {
            return next(ApiError.unauthorized())
        }
    }
}

