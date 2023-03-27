require('dotenv').config()
const { Sequelize } = require('sequelize');

const user = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

const sequelize = new Sequelize('postgres://'+user+'@'+DB_HOST+':'+DB_PORT+'/'+DB_NAME);

module.exports = sequelize;