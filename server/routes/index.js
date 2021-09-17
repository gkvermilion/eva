const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter')
const connectionRouter = require('./connectionRouter')
const promocodeRouter = require('./promocodeRouter')
const productRouter = require('./productRouter')

router.use('/user', userRouter)
router.use('/connection', connectionRouter)
router.use('/promocode', promocodeRouter)
router.use('/product', productRouter)

module.exports = router