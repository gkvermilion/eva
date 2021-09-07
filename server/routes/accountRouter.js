const Router = require('express')
const router = new Router()
const accountController = require('../controllers/accountController')

router.post('/addacc', accountController.create)
router.get('/getall', accountController.getAll)
//я на днях допишу реализацию поиска по айди