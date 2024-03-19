require('dotenv').config();

module.exports = {
    development: {
        database: process.env.DB_NAME_DEV,
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASS_DEV,
        host: process.env.DB_HOST_DEV,
        port: process.env.DB_PORT_DEV,
        dialect: 'mysql',
    },
    production: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
    },
};
