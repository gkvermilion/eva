const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const adminController = require('../controllers/adminController')

router.post('/change-role', authMiddleware, checkRoleMiddleware('ADMIN'), adminController.changeRole);

module.exports = router