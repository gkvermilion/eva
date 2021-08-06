const DataTypes = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    VK: {type: DataTypes.STRING, unique: true}
})

const Connection = sequelize.define('connection', {
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

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: false}
})

const PromoCode = sequelize.define('promo_code', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    valid_from: {type: DataTypes.DATE, allowNull: false},
    valid_till: {type: DataTypes.DATE, allowNull: false}
})

const PromoUsages = sequelize.define('promo_usages', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Boost = sequelize.define('boost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    current_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    end_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    super: {type: DataTypes.BOOLEAN},
    choice: {type: DataTypes.BOOLEAN},
    special_time: {type: DataTypes.BOOLEAN},
    start: {type: DataTypes.INTEGER},
    end: {type: DataTypes.INTEGER},
    no_guard: {type: DataTypes.BOOLEAN},
    duo: {type: DataTypes.BOOLEAN}
})

const Account = sequelize.define('account', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    decency: {type: DataTypes.INTEGER, defaultValue: 10000, allowNull: false},
    level: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    steam_link: {type: DataTypes.STRING, allowNull: false},
    dotabuff: {type: DataTypes.STRING, allowNull: false},
    account_password: {type: DataTypes.STRING, allowNull: false}
})

const Calibrate = sequelize.define('calibrate', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    previous_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    super: {type: DataTypes.BOOLEAN},
    games: {type: DataTypes.INTEGER, defaultValue: 0},
    no_guard: {type: DataTypes.BOOLEAN}
})

const Coach = sequelize.define('coach', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}
})

User.hasOne(Balance)
Balance.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Connection)
Connection.belongsTo(User)

User.hasMany(Product)
Product.belongsTo(User)

User.hasOne(PromoUsages)
PromoUsages.belongsTo(User)

PromoUsages.hasOne(PromoCode)
PromoCode.belongsTo(PromoUsages)

Balance.hasMany(Rating)
Rating.belongsTo(Balance)

PromoCode.hasMany(Product)
Product.belongsTo(PromoCode)

Product.belongsToMany(Boost, {through: Type})
Boost.belongsToMany(Product, {through: Type})

Product.belongsToMany(Account, {through: Type})
Account.belongsToMany(Product, {through: Type})

Product.belongsToMany(Calibrate, {through: Type})
Calibrate.belongsToMany(Product, {through: Type})

Product.belongsToMany(Coach, {through: Type})
Coach.belongsToMany(Product, {through: Type})

module.exports = {
    User,
    Connection,
    Balance,
    Rating,
    Product,
    PromoCode,
    PromoUsages,
    Type,
    Boost,
    Account,
    Calibrate,
    Coach
}