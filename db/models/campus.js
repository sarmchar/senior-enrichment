'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');
const Student = require('./student.js');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,

    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/planet.png'
    }
}, {
instanceMethods: {
  getStudents: function() {
    return Student.findAll({
      where: {campusId: this.id}
    })
    .catch((err) => {console.log(err);});
  }
},
hooks: {
  beforeDestroy: (campus) => {
      return Student.findAll({
        where: {campusId: campus.id}
      }).then(function(students){
        let update = students.map(student => { return student.update({campusId: null});
        });
        return Promise.all(update);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
});

