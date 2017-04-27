var express = require('express');
var app = express();

// http://localhost:3003/test/45
//http://localhost:3003/testQuery/bob

app.get('/test/:id', function(req, res) {
  console.log('in get test');
  console.log('req.params ->', req.params.id);
  res.sendStatus(200);
});
// query string
//http://localhost:3003/testQuery?name=bob
//http://localhost:3003/testQuery?name=bob
//http://localhost:3003/test?id=45

app.get('/testQuery', function(req, res) {
  console.log('in get testQuery');
  console.log('req.query ->', req.query);
  res.sendStatus(200);
});

app.listen(3003, function() {
  console.log('listening on 3003');
});
