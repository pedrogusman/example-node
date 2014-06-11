// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/getScores', function(req, res) {
  //res.send('Hello World!');
  
  var item = {};
	item.id = request.query.id;
	
  
  res.send(JSON.stringify(item));
  	
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});



