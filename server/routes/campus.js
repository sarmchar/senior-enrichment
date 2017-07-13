'use strict';
const api = require('express').Router();
const models = require('../../db/models');
const Campus = models.Campus;

//get all campuses
api.get('/', function(req, res, next){
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});

//get single campus
api.get('/:campusId', function(req, res, next){
  Campus.findById(req.params.campusId)
  .then(campus => res.json(campus))
  .catch(next);
});

//post campus
api.post('/', function(req, res, next){
  const campus = Campus.build(req.body);
  return campus.save()
  .then((camp) => res.json(camp))
  .catch(next);
});

//update campus
api.put('/:campusId', function(req, res, next){
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(req.body))
    .then((campus) => res.json(campus))
    .catch(next);
});

//delete campus
api.delete('/:campusId', function(req, res, next){
  Campus.destroy({ where: { id: req.params.campusId } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = api;
