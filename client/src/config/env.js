'use strict';

const env = {
  PORT: process.env.PORT || 8089,
  DATABASE_URL: process.env.DATABASE_URL || 'localhost:3306/insure_app_db',
  DATABASE_NAME: process.env.DATABASE_NAME || 'insure_app_db',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'root',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;