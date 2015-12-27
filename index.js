'use strict';

require('marko/node-require').install();

const _ = require('highland');
const Hapi = require('hapi');
const server = new Hapi.Server();
const template = require('./src/pages/home/template.marko');

server.connection({ port: 3000 });

const greetPeople = (request, reply) => {

  const people = _();

  setTimeout(() => people.write({name: 'Abigail'}), 1000);
  setTimeout(() => people.write({name: 'Barry'}), 2000);
  setTimeout(() => people.write({name: 'Chelsea'}), 3000);
  setTimeout(() => people.write({name: 'David'}), 4000);
  setTimeout(() => people.write({name: 'Ella'}), 5000);
  setTimeout(() => people.write({name: 'Frank'}), 6000);
  setTimeout(() => people.end(), 6000);

  reply(template.stream({ people: people }));
};

server.route({
  method: 'get',
  path: '/',
  handler: greetPeople
});

server.start((err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`Server running at ${ server.info.uri }`);
});
