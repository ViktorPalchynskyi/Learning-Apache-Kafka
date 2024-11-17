const dotenv = require('dotenv');
const path = require('node:path');

dotenv.config({
    path: path.join(__dirname, '../../', '.env'),
});

const dbURI = {
    development: process.env.DB_DEVELOP_URI,
    test: process.env.DB_TEST_URI,
    production: process.env.DB_PRODUCTION_URI,
};

module.exports = {
    db: {
        port: process.env.DB_PORT,
        host: dbURI[process.env.NODE_ENV],
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
    },
    server: {
        port: 3000,
        allowedOrigins: [process.env.FRONTEND_ORIGIN] || [],
    },
    crypto: {
        iterations: process.env.NODE_ENV === 'test' ? 1 : 12000,
        length: 128,
        digest: 'sha512',
    },
    app: {
        nodeEnv: process.env.NODE_ENV,
    },
    logger: {
        maxFileSize: process.env.LOGGER_MAX_FILE_SIZE,
        maxLiveTime: process.env.LOGGER_MAX_LIVE_TIME,
        datePattern: process.env.LOGGER_DATE_PATTERN,
        level: process.env.LOGGER_LEVEL,
    },
    providers: {
        github: {
            appId: process.env.GITHUB_APP_ID || 'github_app_id',
            appSecret: process.env.GITHUB_APP_SECRET || 'github_app_secret',
            callbackURI: 'http://localhost:3000/api/v1/oauth/oauth_callback/github',
            options: {
                scope: ['user:email'],
            },
        },
    },
    mailer: {
        user: 'test@test.com',
        password: 'sasi hbzc wjcs qkdk',
    }
};