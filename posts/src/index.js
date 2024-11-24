require('module-alias/register');

const { config, connectToDatabase, syncDatabase } = require('@config');
const PORT = config.server.port;
const app = require('./app');

app.listen(PORT, () => {
    const isForceDBSync = config.app.nodeEnv === 'development';

    connectToDatabase();
    syncDatabase(isForceDBSync);

    console.log(`Posts service running on port: ${PORT}`);
});
