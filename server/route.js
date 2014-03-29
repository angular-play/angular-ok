var mongojs = require("mongojs");
var config = require("./config").config;
var db = mongojs(config.mongoUri);

module.exports = function(app){
  app.get("/", function(req, res){
    res.sendfile("./public/views/index2.html");
  });

  app.post("/api/query", function(req, res){
    var body = req.body;
    var entity = body.entity;
    var collection = db.collection(entity);

    collection.find(body, function(err, documents){
      if(err) console.error(err);
      res.json(documents);
    });

  });

  app.post("/api/update", function(req, res){
    var body = req.body;
    var entity = body.entity;
    var collection = db.collection(entity);
    collection.save(body, function(err, document){
      if(err) console.err(err);
      res.json(document);
    });

  });
};
