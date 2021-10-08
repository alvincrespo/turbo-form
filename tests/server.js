const fastify = require('fastify')();
const path = require('path');

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public')
});

fastify.get('/', function (req, res) {
  return res.sendFile('index.html');
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
