const DataTypes = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, required: true},
    password: {type: DataTypes.STRING, required: true},
    isActivated: {type: DataTypes.BOOLEAN, default: false},
    activationLink: {type: DataTypes.STRING},
    balance: {type: DataTypes.INTEGER, defaultValue: 0},
    avatar: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    VK: {type: DataTypes.STRING, unique: true}
})

const BoosterInfo = sequelize.define('booster_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rank: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    mmr: {type: DataTypes.INTEGER, defaultValue: 5000},
    win_rate: {type: DataTypes.INTEGER},
    wins: {type: DataTypes.INTEGER},
    loses: {type: DataTypes.INTEGER},
    all_games: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    phone: {type: DataTypes.INTEGER},
    discord: {type: DataTypes.STRING},
    info: {type: DataTypes.STRING}
})

const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, required: true}
})

const SteamGuard = sequelize.define('steam_guard', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sg_1: {type: DataTypes.STRING},
    sg_2: {type: DataTypes.STRING},
    sg_3: {type: DataTypes.STRING},
    sg_4: {type: DataTypes.STRING},
    sg_5: {type: DataTypes.STRING}
})

const UserInfo = sequelize.define('connection', {//форма для всего
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    steam_login: {type: DataTypes.STRING, allowNull: false},
    steam_password: {type: DataTypes.STRING, allowNull: false},
    chat: {type: DataTypes.STRING, allowNull: false},
    desire: {type: DataTypes.STRING}
})

const Connection = sequelize.define('connection', {//форма для всего
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    steam_login: {type: DataTypes.STRING, allowNull: false},
    steam_password: {type: DataTypes.STRING, allowNull: false},
    chat: {type: DataTypes.STRING, allowNull: false},
    wallet_type: {type: DataTypes.STRING},
    number: {type: DataTypes.INTEGER},
    dotabuff: {type: DataTypes.STRING, allowNull: false},
    acc_mail: {type: DataTypes.STRING, allowNull: false},
    mail_password: {type: DataTypes.STRING, allowNull: false},
    secret: {type: DataTypes.STRING},
    desire: {type: DataTypes.STRING}
})

const Withdrawal = sequelize.define('withdrawal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    time: {type: DataTypes.DATE},
    sum: {type: DataTypes.INTEGER, allowNull: false},
    wallet: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, default: 'Обрабатывается'}
})

const Result = sequelize.define('result', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    time: {type: DataTypes.DATE},
    mmr: {type: DataTypes.INTEGER, allowNull: false},
    hero: {type: DataTypes.STRING, allowNull: false},
    match_id: {type: DataTypes.STRING, allowNull: false},
    screenshot: {type: DataTypes.STRING, allowNull: false}
})

const Problem = sequelize.define('balance', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    problem_code: {type: DataTypes.INTEGER, defaultValue: 1},
    info: {type: DataTypes.STRING},
    screenshot: {type: DataTypes.STRING, allowNull: false}
})

const Penaltie = sequelize.define('penaltie', {
    details: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.TIME},
    penalty: {type: DataTypes.INTEGER, defaultValue: 50}
})

const Rating = sequelize.define('rating', {//рейтинг за услугу
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const PromoCode = sequelize.define('promo_code', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    isActive: {type: DataTypes.BOOLEAN, default: true}
})

const Boost = sequelize.define('boost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, default: 'Не занят'},
    price: {type: DataTypes.INTEGER, allowNull: false},
    current_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    end_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    super: {type: DataTypes.BOOLEAN, defaultValue: false},
    choice: {type: DataTypes.BOOLEAN, defaultValue: false},//выбор героев
    special_time: {type: DataTypes.BOOLEAN, defaultValue: false},
    start: {type: DataTypes.INTEGER},
    end: {type: DataTypes.INTEGER},
    no_guard: {type: DataTypes.BOOLEAN, defaultValue: false},
    duo: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const Account = sequelize.define('account', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, default: 'Не занят'},
    price: {type: DataTypes.INTEGER, allowNull: false},
    mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    decency: {type: DataTypes.INTEGER, defaultValue: 10000, allowNull: false},//порядочность
    level: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    steam_link: {type: DataTypes.STRING, allowNull: false},
    dotabuff: {type: DataTypes.STRING, allowNull: false},
    account_password: {type: DataTypes.STRING, allowNull: false},
    steam_login: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    img_2: {type: DataTypes.STRING, allowNull: false},
    img_3: {type: DataTypes.STRING, allowNull: false}
})

const Calibrate = sequelize.define('calibrate', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, default: 'Не занят'},
    price: {type: DataTypes.INTEGER, allowNull: false},
    previous_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    super: {type: DataTypes.BOOLEAN, defaultValue: false},//сделать быстрее
    games: {type: DataTypes.INTEGER, defaultValue: 0},//сколько игры осталось сыграть  от 1 до 10
    no_guard: {type: DataTypes.BOOLEAN, defaultValue: false}//не отключать стим гуард
})

const Coach = sequelize.define('coach', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, default: 'Не занят'},
    price: {type: DataTypes.INTEGER, allowNull: false},
    count: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}//кол во игр с тренером
})

const ChosenHeroes = sequelize.define('chosen_heroes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    hero_1: {type: DataTypes.STRING},
    hero_2: {type: DataTypes.STRING},
    hero_3: {type: DataTypes.STRING},
    hero_4: {type: DataTypes.STRING},
    hero_5: {type: DataTypes.STRING}
})

const BannedHeroes = sequelize.define('banned_heroes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    hero_1: {type: DataTypes.STRING},
    hero_2: {type: DataTypes.STRING},
    hero_3: {type: DataTypes.STRING},
    hero_4: {type: DataTypes.STRING},
    hero_5: {type: DataTypes.STRING}
})

BoosterInfo.hasMany(Rating)
Rating.belongsTo(BoosterInfo)

User.hasMany(Withdrawal)
Withdrawal.belongsTo(User)

User.hasOne(BoosterInfo)
BoosterInfo.belongsTo(User)

Boost.hasMany(Result)
Result.belongsTo(Boost)

Calibrate.hasMany(Result)
Result.belongsTo(Calibrate)

BoosterInfo.hasMany(Result)
Result.belongsTo(BoosterInfo)

Boost.hasMany(Problem)
Problem.belongsTo(Boost)

Calibrate.hasMany(Problem)
Problem.belongsTo(Calibrate)

User.hasMany(Problem)
Problem.belongsTo(User)

Boost.hasMany(Penaltie)
Penaltie.belongsTo(Boost)

Calibrate.hasMany(Penaltie)
Penaltie.belongsTo(Calibrate)

Coach.hasMany(Penaltie)
Penaltie.belongsTo(Coach)

User.hasMany(Penaltie)
Penaltie.belongsTo(User)

User.hasMany(UserInfo)
UserInfo.belongsTo(User)

User.hasMany(Connection)
Connection.belongsTo(User)

Boost.hasMany(SteamGuard)
SteamGuard.belongsTo(Boost)

Calibrate.hasMany(SteamGuard)
SteamGuard.belongsTo(Calibrate)

User.hasMany(Account)
Account.belongsTo(User)

User.hasMany(Boost)
Boost.belongsTo(User)

User.hasMany(Calibrate)
Calibrate.belongsTo(User)

User.hasMany(Coach)
Coach.belongsTo(User)

PromoCode.hasMany(User)
User.belongsTo(PromoCode)

Boost.hasOne(ChosenHeroes)
ChosenHeroes.belongsTo(Boost)

Boost.hasOne(BannedHeroes)
BannedHeroes.belongsTo(Boost)

Calibrate.hasOne(ChosenHeroes)
ChosenHeroes.belongsTo(Calibrate)

Calibrate.hasOne(BannedHeroes)
BannedHeroes.belongsTo(Calibrate)

User.hasOne(Token)
Token.belongsTo(User)

module.exports = {
    User,
    UserInfo,
    BoosterInfo,
    Token,
    SteamGuard,
    Withdrawal,
    Result,
    Problem,
    Penaltie,
    ChosenHeroes,
    BannedHeroes,
    Connection,
    Rating,
    PromoCode,
    Boost,
    Account,
    Calibrate,
    Coach
}