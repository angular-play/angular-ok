var express = require("express");
var path = require("path");
var app = express();

app.configure(function(){
  app.use(express.static(path.join(__dirname, "/public")));
  app.use(express.bodyParser());
  app.use(express.logger(""));
  app.use(express.methodOverride());
});


require("./server/route")(app);

var port  = 9999;
app.listen(port);
