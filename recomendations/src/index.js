require('module-alias/register');

const { config, connectToDatabase } = require('@config');
const PORT = config.server.port;
const app = require('./app');

app.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server running on port: ${PORT}`);
});
