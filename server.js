var express = require('express');
var app = express();

// url params
// These requests are examples of how to hit the
// testParams route below:
//http://localhost:3003/testParams/45
//http://localhost:3003/testQuery/bob
app.get('/testParams/:id', function(req, res) {
  console.log('in get testParams');
  console.log('req.params ->', req.params.id);
  res.sendStatus(200);
});

// query string
// These requests are expamples of how to hit testQuery
// route below:
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
