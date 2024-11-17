const config = require('./config');
const { connectToDatabase, disconnectFromDatabase } = require('./database');
const corsConfig = require('./corsConfig');

module.exports = {
    corsConfig,
    config,
    connectToDatabase,
    disconnectFromDatabase,
};
