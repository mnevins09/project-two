require('dotenv').config()

var config = {
  "development": {
    "username": "root",
    "password": "H@ppy1234",
    "database": "spa",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 20000,
      acquire: 20000
      }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}


module.exports = config;