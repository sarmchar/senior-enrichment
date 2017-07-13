'use strict';
const api = require('express').Router();
const models = require('../../db/models');
const Student = models.Student;
const Campus = models.Campus;

//get all students
api.get('/', function(req, res, next){
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

//get single student
api.get('/:studentId', function(req, res, next){
  Student.findById(req.params.studentId)
  .then(student => res.json(student))
  .catch(next);
});

//post student
api.post('/', function(req, res, next){
  Campus.findOrCreate({
    where: {
      id: req.body.campusId || '1'
    }
  })
  .spread(campus => {
    const student = Student.build(req.body);
    student.setCampus(campus, { save: false });
    return student.save()
      .then(student => {
       student = student.toJSON();
       student.campus = campus;
       return student;
      });
  })
  .then(student => res.json(student))
  .catch(next);
});

//update student
api.put('/:studentId', function(req, res, next){
  Student.findById(req.params.studentId)
    .then(student => student.update(req.body))
    .then(student => res.json(student))
    .catch(next);
});

//delete student
api.delete('/:studentId', function(req, res, next){
  Student.destroy({ where: { id: req.params.studentId } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = api;
