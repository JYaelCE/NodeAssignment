const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const sequelize = new Sequelize(
  process.env.DB_DB,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOSTNAME,
    dialect: "mysql",
    dialectOptions: {},
    define: {
      timestamps: false,
    },
  }
);

module.exports = sequelize ;
