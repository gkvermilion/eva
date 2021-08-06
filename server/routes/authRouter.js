const Router = require('express')
const router = new Router()

router.post('/login')
router.post('/password')
router.get('/auth')

module.exports = router