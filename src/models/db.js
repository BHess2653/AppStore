const Sequelize = require('sequelize');
const utool = require('fs-uTool');

if (!process.env.DB_HOST) {
  require('dotenv').config();
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Sets up database
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Defines User table
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const user = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
  },
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Defines character table
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const character = sequelize.define('characters', {
  name: {
    type: Sequelize.STRING,
  },
  class: {
    type: Sequelize.STRING,
  },
  spec: {
    type: Sequelize.STRING,
  },
});

user.hasMany(character, {
  foreignKey: 'userID',
});

// Sync to database
sequelize.sync();
if (sequelize.sync()) {
  utool.debug('DB sync ', '✓ Success ✓');
} else {
  utool.debug('DB sync ', 'x Failed x');
}

// Export sequelize
exports.sequelize = sequelize;

// Exports user
exports.user = user;

// Exports character
exports.character = character;
