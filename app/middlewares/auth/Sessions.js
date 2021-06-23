const expressSession = require("express-session");
const SessionStore = require("express-session-sequelize")(expressSession.Store);
const Sequelize = require("sequelize");
const DatabaseConfig = require("../../config/database");

const connection = new Sequelize(DatabaseConfig);

const sequelizeSessionStore = new SessionStore({
    db: connection,
});

const newExpressSession = expressSession({
    secret: "the life is amazing",
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
});

export default newExpressSession;
