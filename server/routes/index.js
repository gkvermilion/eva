const Router = require('express')
const router = new Router()
const adminRouter = require('./adminRouter')
const authRouter = require('./authRouter')
const boosterRouter = require('./boosterRouter')
const shopRouter = require('./shopRouter')
const registrationRouter = require('./registrationRouter')
const mainPageRouter = require('./mainPageRouter')
const accountsPageRouter = require('./accountsPageRouter')

router.use('/AccountsPage', accountsPageRouter)
router.use('/Admin', adminRouter)
router.use('/Auth', authRouter)
router.use('/Booster', boosterRouter)
router.use('/MainPage', mainPageRouter)
router.use('/Registration', registrationRouter)
router.use('/Shop', shopRouter)

module.exports = router