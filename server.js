const express = require('express');
const actionsRouter = require('./data/actions/actionsRouter');

const server = express();

server.use(express.json());
server.use('/api/cars', actionsRouter);

server.get('/', (req,res) => {
  res.send('<h3>DB helpers with knex</h3>');
})

module.exports = server;