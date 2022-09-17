const { config } = require('../config/config');


module.exports = {
  development: {
    url: config.Url,
    dialect: 'postgres'
  },
  production: {
    url: config.Url,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
