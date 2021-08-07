const Router = require('express')
const router = new Router()
const connectionController = require('../controllers/connectionController')


router.post('/', connectionController.create)
router.get('/', connectionController.getAll)
router.get('/:id', connectionController.get)

module.exports = router