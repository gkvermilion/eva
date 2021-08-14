const DataTypes = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    VK: {type: DataTypes.STRING, unique: true}
})

const Connection = sequelize.define('connection', {//форма для всего
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    steam_login: {type: DataTypes.STRING, allowNull: false},
    steam_password: {type: DataTypes.STRING, allowNull: false},
    chat: {type: DataTypes.STRING, allowNull: false},
    desire: {type: DataTypes.STRING}
})

// const Order = sequelize.define('order', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

const Balance = sequelize.define('balance', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    balance_value: {type: DataTypes.INTEGER, defaultValue: 0},
    rating: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Rating = sequelize.define('rating', {//рейтинг за услугу
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const PromoCode = sequelize.define('promo_code', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Boost = sequelize.define('boost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    current_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    end_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    super: {type: DataTypes.BOOLEAN},
    choice: {type: DataTypes.BOOLEAN},//выбор героев
    special_time: {type: DataTypes.BOOLEAN},
    start: {type: DataTypes.INTEGER},
    end: {type: DataTypes.INTEGER},
    no_guard: {type: DataTypes.BOOLEAN},
    duo: {type: DataTypes.BOOLEAN}
})

const Account = sequelize.define('account', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    decency: {type: DataTypes.INTEGER, defaultValue: 10000, allowNull: false},//порядочность
    level: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    steam_link: {type: DataTypes.STRING, allowNull: false},
    dotabuff: {type: DataTypes.STRING, allowNull: false},
    account_password: {type: DataTypes.STRING, allowNull: false},
    steam_login: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Calibrate = sequelize.define('calibrate', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    previous_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    super: {type: DataTypes.BOOLEAN},//сделать быстрее
    games: {type: DataTypes.INTEGER, defaultValue: 0},//сколько игры осталось сыграть  от 1 до 10
    no_guard: {type: DataTypes.BOOLEAN}//не отключать стим гуард
})

const Coach = sequelize.define('coach', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    count: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}//кол во игр с тренером
})

User.hasOne(Balance)
Balance.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Connection)
Connection.belongsTo(User)

User.hasMany(Account)
Account.belongsTo(User)

User.hasMany(Boost)
Boost.belongsTo(User)

User.hasMany(Calibrate)
Calibrate.belongsTo(User)

User.hasMany(Coach)
Coach.belongsTo(User)

Balance.hasMany(Rating)
Rating.belongsTo(Balance)

PromoCode.hasMany(User)
User.belongsTo(PromoCode)

module.exports = {
    User,
    Connection,
    Balance,
    Rating,
    PromoCode,
    Boost,
    Account,
    Calibrate,
    Coach
}