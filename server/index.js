require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()

app.use(errorHandler) //Послдежний мидлварь, он должен идти последним

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}


start()