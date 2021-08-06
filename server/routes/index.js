const Router = require('express')
const router = new Router()
const adminRouter = require('./adminRouter')
const authRouter = require('./authRouter')
const boosterRouter = require('./boosterRouter')
const shopRouter = require('./shopRouter')
const registrationRouter = require('./registrationRouter')
const mainPageRouter = require('./mainPageRouter')
const accountsPageRouter = require('./accountsPageRouter')

router.use('/account', accountsPageRouter)
router.use('/admin', adminRouter)
router.use('/auth', authRouter)
router.use('/booster', boosterRouter)
router.use('/mainpage', mainPageRouter)
router.use('/registration', registrationRouter)
router.use('/shop', shopRouter)

module.exports = router