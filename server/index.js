const server = require('./server');

server.init()
.then(server.start)
.finally(function(app) {
  console.log('==================================================');
  console.log('* Product Travel UI Server *');
	console.log('Version: 0.1.0');
	console.log('Started: ' + new Date().toISOString());
	console.log('==================================================');
})
.catch(function(err) {
  console.log(err);
});