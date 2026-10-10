const path = require('path');

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_NAME: process.env.APP_NAME || 'dev-starter-template',
  ROOT_DIR: path.resolve(__dirname, '..'),
};
