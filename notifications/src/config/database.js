const { Sequelize } = require('sequelize');
const config = require('./config');
const {
    db: { host, name, user, password, dialect },
} = config;

const sequelize = new Sequelize(name, user, password, {
    dialect,
    host,
    define: {
        timestamps: false,
    },
    logging: false,
    minifyAliases: dialect === 'postgres',
});

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function disconnectFromDatabase() {
    try {
        await sequelize.close();
        console.log('Connection to the database has been closed successfully.');
    } catch (error) {
        console.error('Error while closing the database connection:', error);
    }
}

module.exports = { connectToDatabase, disconnectFromDatabase };
