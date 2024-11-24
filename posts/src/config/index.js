const config = require('./config');
const { connectToDatabase, disconnectFromDatabase, syncDatabase, sequelize } = require('./database');
const corsConfig = require('./corsConfig');

module.exports = {
    corsConfig,
    config,
    connectToDatabase,
    disconnectFromDatabase,
    syncDatabase,
    sequelize,
};
