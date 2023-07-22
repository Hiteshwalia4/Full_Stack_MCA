var MongoClient= require("mongodb").MongoClient
var url="mongodb://localhost:27017//MongoAssign"
MongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbo=db.db("Mongo_Assign")
    dbo.createCollection("enrollment",function(err,res){
        if(err) throw err;
        console.log("Collection Created :)");
        db.close();
    });
});