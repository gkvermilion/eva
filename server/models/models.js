const DataTypes = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', { // юзер, бустер, админ
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, required: true},
    password: {type: DataTypes.STRING, required: true},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false}, // статус аккаунта
    activationLink: {type: DataTypes.STRING}, // ссылка на подтверждение
    balance: {type: DataTypes.INTEGER, defaultValue: 0}, // баланс
    avatar: {type: DataTypes.STRING}, // аватарка может меняться только у бустеров и присвается
    // вместе с вк
    role: {type: DataTypes.STRING, defaultValue: "USER"}, // роль
    VK: {type: DataTypes.STRING, unique: true} // ссылка на вк
})

const BoosterInfo = sequelize.define('booster_info', { // всевозможная инфа о бустере
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rank: {type: DataTypes.STRING}, //ранг
    rating: {type: DataTypes.INTEGER, defaultValue: 0}, // рейтинг
    mmr: {type: DataTypes.INTEGER, defaultValue: 5000}, // ммр
    win_rate: {type: DataTypes.INTEGER}, // высчитывается по формуле
    wins: {type: DataTypes.INTEGER}, // инкрементируется с каждой победой в сервисе
    loses: {type: DataTypes.INTEGER}, // инкрементируется с каждым поражением
    all_games: {type: DataTypes.INTEGER}, // wins + loses
    name: {type: DataTypes.STRING}, // личная инфа
    surname: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    phone: {type: DataTypes.INTEGER},
    discord: {type: DataTypes.STRING},
    info: {type: DataTypes.STRING} // просто инфа
})

const Token = sequelize.define('token', { // таблица с токеном авторизации
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, required: true}
})

const SteamGuard = sequelize.define('steam_guard', { // табл для хранения стимкодов
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sg_1: {type: DataTypes.STRING},
    sg_2: {type: DataTypes.STRING},
    sg_3: {type: DataTypes.STRING},
    sg_4: {type: DataTypes.STRING},
    sg_5: {type: DataTypes.STRING}
})

const UserInfo = sequelize.define('connection', {//форма для всего остального
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    steam_login: {type: DataTypes.STRING, allowNull: false},
    steam_password: {type: DataTypes.STRING, allowNull: false},
    chat: {type: DataTypes.STRING, allowNull: false},
    desire: {type: DataTypes.STRING} // пожелания
})

const Connection = sequelize.define('connection', {//форма для продажи аккаунта
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    steam_login: {type: DataTypes.STRING, allowNull: false},
    steam_password: {type: DataTypes.STRING, allowNull: false},
    chat: {type: DataTypes.STRING, allowNull: false},
    wallet_type: {type: DataTypes.STRING}, // тип кошелька (qiwi, webmoney...)
    number: {type: DataTypes.INTEGER}, // номер кошелька
    dotabuff: {type: DataTypes.STRING, allowNull: false},
    acc_mail: {type: DataTypes.STRING, allowNull: false}, // почта от аккаунта
    mail_password: {type: DataTypes.STRING, allowNull: false}, // пароль от почты
    secret: {type: DataTypes.STRING}, // секретный вопрос от почты (опционально)
    desire: {type: DataTypes.STRING} // пожелания
})

const Withdrawal = sequelize.define('withdrawal', { // вывод средств
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    time: {type: DataTypes.DATE}, // дата
    sum: {type: DataTypes.INTEGER, allowNull: false}, // сумма вывода
    wallet: {type: DataTypes.STRING, allowNull: false}, // номер кошелька
    status: {type: DataTypes.STRING, defaultValue: 'Обрабатывается'} // статус (обрабатывается, завершен, отклонено)
})

const Result = sequelize.define('result', { // результат, который вбивается после каждой игры
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    time: {type: DataTypes.DATE}, // время (автоматически)
    mmr: {type: DataTypes.INTEGER, allowNull: false}, // вручную цифрой типа (+24)
    hero: {type: DataTypes.STRING, allowNull: false}, // выбор героя, на котором играл
    match_id: {type: DataTypes.STRING, allowNull: false}, // айди матча
    screenshot: {type: DataTypes.STRING, allowNull: false} // скрин с сайта pastenow
})

const Problem = sequelize.define('balance', { // таблица для ошибок, обнаруженных бустерами
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    problem_code: {type: DataTypes.INTEGER, defaultValue: 1}, // код проблемы от 1 до 4
    info: {type: DataTypes.STRING}, // инфа, которую пишет бустер
    screenshot: {type: DataTypes.STRING, allowNull: false} // скрин с сайта pastenow
})

const Penaltie = sequelize.define('penaltie', { // штрафы
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    details: {type: DataTypes.STRING, allowNull: false}, // пишет админ причину штрафа
    time: {type: DataTypes.TIME}, // время (авто)
    penalty: {type: DataTypes.INTEGER, defaultValue: 50} // сумма штрафа не менее 50 рублев хотя в принциапе пох
})

const Rating = sequelize.define('rating', { //рейтинг за услугу
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false} // оценить от 0 до 5 звезд в яндекс.такси
})

const PromoCode = sequelize.define('promo_code', { // промокод
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}, // сам промокод
    isActive: {type: DataTypes.BOOLEAN, defaultValue: true} // активен/неактивен
})

const Boost = sequelize.define('boost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, defaultValue: 'Не занят'}, // статус (не занят, занят, завершен, отменен)
    price: {type: DataTypes.INTEGER, allowNull: false}, // цена
    current_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}, // текущий ммр
    end_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}, // конечный ммр
    super: {type: DataTypes.BOOLEAN, defaultValue: false}, // сделать быстро
    choice: {type: DataTypes.BOOLEAN, defaultValue: false}, // выбор героев (до 5 на выбор и до 5 на бан)
    special_time: {type: DataTypes.BOOLEAN, defaultValue: false}, // играть в определенное время
    //
    start: {type: DataTypes.INTEGER}, // начало
    end: {type: DataTypes.INTEGER}, // конец
    // есть возможность перенести эти два поля в отдельную таблицу, но пока хз
    no_guard: {type: DataTypes.BOOLEAN, defaultValue: false}, // не отключать стим гуард
    duo: {type: DataTypes.BOOLEAN, defaultValue: false} // дуо буст
})

const Account = sequelize.define('account', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, defaultValue: 'Не занят'}, // статус (не занят, занят, завершен, отменен)
    price: {type: DataTypes.INTEGER, allowNull: false}, // цена
    mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}, // ммр
    decency: {type: DataTypes.INTEGER, defaultValue: 10000, allowNull: false}, // порядочность
    level: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}, // уровень
    steam_link: {type: DataTypes.STRING, allowNull: false}, // стим линк
    dotabuff: {type: DataTypes.STRING, allowNull: false}, // дотабафф
    account_password: {type: DataTypes.STRING, allowNull: false}, // пароль от аккаунта
    steam_login: {type: DataTypes.STRING, allowNull: false}, // логин от стима
    img: {type: DataTypes.STRING, allowNull: false}, // картинка с разрешением
    img_2: {type: DataTypes.STRING, allowNull: false}, // картинка для хранения страницы аккаунта
    img_3: {type: DataTypes.STRING, allowNull: false} // картинка для хранения статистики по героям
})

const Calibrate = sequelize.define('calibrate', { // калибровка
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, defaultValue: 'Не занят'}, // статус (не занят, занят, завершен, отменен)
    price: {type: DataTypes.INTEGER, allowNull: false}, // цена
    previous_mmr: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}, // ммр на аккаунте
    super: {type: DataTypes.BOOLEAN, defaultValue: false}, // сделать быстрее
    games: {type: DataTypes.INTEGER, defaultValue: 0}, // сколько игры осталось сыграть  от 10 до 1
    no_guard: {type: DataTypes.BOOLEAN, defaultValue: false} // не отключать стим гуард
})

const Coach = sequelize.define('coach', { // обучение
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, defaultValue: 'Не занят'}, // статус (не занят, занят, завершен, отменен)
    price: {type: DataTypes.INTEGER, allowNull: false}, // цена
    count: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false} // кол во игр с тренером => соответственно
    // декрементируется после каждой сыгранной игры и по достижению 0 статус заказа меняется на завершенный, но это
    // в идеале
})

const ChosenHeroes = sequelize.define('chosen_heroes', { // выбор до 5 героев для игры
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    hero_1: {type: DataTypes.STRING},
    hero_2: {type: DataTypes.STRING},
    hero_3: {type: DataTypes.STRING},
    hero_4: {type: DataTypes.STRING},
    hero_5: {type: DataTypes.STRING}
})

const BannedHeroes = sequelize.define('banned_heroes', { // выбор до 5 в бан
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