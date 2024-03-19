const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const dbConfig = require('../config/db.config');

let sequelize;

const PRODUCTION = 'prod';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const config = dbConfig[env];

if (process.env.MODE === PRODUCTION) {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password, {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        dialectOption: { ssl: true, native: true },
        logging: true,
    },
    );
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, {
        port: config.port,
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: 0,
    });
}

const models = {};

fs.readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = require(path.join(__dirname, file));
        models[model.name] = model;
    });

Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };
export default models;
