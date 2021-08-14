const Router = require('express')
const router = new Router()
const promocodeController = require('../controllers/promocodeController')


router.post('/', promocodeController.create)
router.get('/', promocodeController.getAll)

module.exports = router