//get all students with Grade A or B

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Mongo_Assign");
  dbo.collection("enrollment").find({"Grade": {$in: ["A", "B"]}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
