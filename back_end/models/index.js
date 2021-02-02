// initialize sequlize
const Sequelize = require('sequelize');
const config = require("../config/index.js");
const db={};
/* const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config.js')[env]; */

//Connecting database
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect, 
    /* pool: {
      max: config.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    } */
  });
  
  sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  }); 
/* let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
} */

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//Initialize the Models
db.studentdetail = require('./studentDetails.model.js')(sequelize, Sequelize);
db.teacherdetail = require('./teacherDetails.model.js')(sequelize, Sequelize);

module.exports = db;