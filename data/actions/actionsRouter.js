const express = require('express');
const knex = require('../helpers/dbConfig');
const router  = express.Router();


router.get('/', (req,res) => {
  knex
  ('cars')
  .then(cars => {
    res.json(cars);
  })
  .catch(err => {
    res.status(500).json({error: "could not get cars from database"})
  })
})

router.post('/', (req,res) => {
  cdb = req.body;
  knex('cars')
  .insert({vin: cdb.vin, make: cdb.make, model:cdb.model, mileage: cdb.mileage, transmission: cdb.transmission, title: cdb.title })
  .then(cars => {
    res.status(201).json(cars)
  })
  .catch(err => {
    res.status(500).json({error: "error while posting cars to the database"})
  })
})

router.put('/:id', (req,res) => {
  cdb = req.body;
  knex('cars')
  .where({id: req.params.id})
  .update({vin: cdb.vin, make: cdb.make, model:cdb.model, mileage: cdb.mileage, transmission: cdb.transmission, title: cdb.title})
  .then(cars => {
    res.status(200).json(cars);
  })
  .catch(err => {
    res.status(500).json({error: "error updating the car to the database"})
  })
})

router.delete('/:id', (req,res) => {
  knex('cars')
  .where({id: req.params.id})
  .del()
  .then(cars => {
    res.status(200).json(cars)
  })
  .catch(err => {
    res.status(500).json({error: "error deleting car"})
  })
})


module.exports = router;