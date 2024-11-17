const config = require('./config');

module.exports = function corsConfig(req, callback) {
    const corsOpts = {
        credentials: true,
    };
    
    corsOpts.origin = config.server.allowedOrigins.includes(req.header('Origin'));

    callback(null, corsOpts);
};
