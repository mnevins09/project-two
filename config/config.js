require('dotenv').config()

var config = {
  "development": {
    "username": "root",
    "password": "mathieu1",
    "database": "spa",
    "host": "root",
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
    "password": "mathieu1",
    "database": "database_test",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "mathieu1",
    "database": "database_production",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  }
}


module.exports = config;