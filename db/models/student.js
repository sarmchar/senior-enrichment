'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    defaultValue: 'ufo.jpg'
    },
  profile: Sequelize.TEXT
});

//add get campus instance method??
