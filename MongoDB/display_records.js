var MongoClient= require("mongodb").MongoClient
var url="mongodb://127.0.0.1:27017//MongoAssign"
MongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbo=db.db("Mongo_Assign")
    dbo.collection("student").find().toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    })
})

// Display using project
var MongoClient= require("mongodb").MongoClient
var url="mongodb://localhost:27017//MongoAssign"
MongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbo=db.db("Mongo_Assign")
    dbo.collection("student").aggregate([
        {
          $lookup: {
            from: "enrollment",
            localField: "Roll_no",
            foreignField: "Roll_No",
            as: "en"
          }
        },
        {
          $project: {
            _id: 0,
            Roll_no: 1,
            stnum: 1,
            "en.Course": 1,
            "en.Grade": 1 
          }
        }
      ])
      .toArray(function(err,res){
        if(err) throw err;
        res.forEach(function(record) {
            console.log("Roll No: " + record.Roll_no);
            console.log("Name: " + record.stnum);
            console.log("Course: " + record.en[0].Course);
            console.log("Grade: " + record.en[0].Grade);
            console.log();
          });
        db.close();
    })
})
