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

async function syncDatabase(force = false) {
    try {
        await sequelize.sync({ force }); // `force = true` удалит таблицы перед созданием
        console.log(`Database synchronized. Force: ${force}`);
    } catch (error) {
        console.error('Unable to synchronize the database:', error);
    }
}

module.exports = { connectToDatabase, disconnectFromDatabase, syncDatabase, sequelize };
