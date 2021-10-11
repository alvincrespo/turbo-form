'use strict'

const path = require('path')
const fastify = require('fastify')({ logger: { level: 'trace' } })

fastify.register(require('fastify-formbody'));
fastify.register(require('fastify-static'), {
  // An absolute path containing static files to serve.
  root: path.join(__dirname, '/public')
});

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  },
  root: path.join(__dirname, '/public')
})

fastify.post('/confirm', function(req, res) {
  console.log({ derp: req.body });
  return res.view('confirm.ejs', { body: req.body });
});


fastify.listen(3000, err => {
  if (err) throw err
});
