'use strict';

const greetingTemplate = require('../app-greeting/template.marko');

const renderPerson = out => person => {
  const data = {
    name: person.name
  };

  greetingTemplate.render(data, out);
  out.flush();
};

const endStream = out => () => out.end();

exports.render = (input, out) => {

  const asyncOut = out.beginAsync();

  input.stream.each(renderPerson(asyncOut)).done(endStream(asyncOut));
};
