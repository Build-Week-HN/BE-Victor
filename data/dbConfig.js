const knex = require('knex');

const knexConfig = require('../knexfile');
const env = process.env.DB_ENV;
module.exports = knex(knexConfig[env]);
