'use strict'

const path = require('path')
const fastify = require('fastify')({ logger: { level: 'trace' } })

fastify.register(require('fastify-formbody'));
fastify.register(require('fastify-static'), {
  // An absolute path containing static files to serve.
  root: path.join(__dirname, '/public')
});


fastify.post('/confirm', function(req, res) {
  return res.sendFile('confirm.html');
});
  

fastify.listen(3000, err => {
  if (err) throw err
});
