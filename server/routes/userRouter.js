const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController');
const {body} = require('express-validator');


router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 16}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
// router.get('/auth', userController.check)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)

// test function
router.get('/users', userController.getUsers)

module.exports = router