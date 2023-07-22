var MongoClient= require("mongodb").MongoClient
var url="mongodb://localhost:27017//MongoAssign"
MongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbo=db.db("Mongo_Assign")
    // var myObj=[
    //     {"Roll_no":1 ,"stnum": "Hitesh", "Address":"Krishna Nagar" },                   
    // {"Roll_no":2 ,"stnum": "Sajal", "Address":"Mayur Vihar" },                   
    // {"Roll_no":3 ,"stnum": "Raghav", "Address":"Pitampura" } ,                  
    // {"Roll_no":4 ,"stnum": "Hardik", "Address":"Ghaziabad,UP" } ,                  
    // {"Roll_no":5 ,"stnum": "Bhavya", "Address":"Meerut,UP" },                   
    // ]
    var myObj2=[
        { "Roll_No": 1, "Course": "BCA", "Grade": "A", "percentMarks": 95 },
  { "Roll_No": 2, "Course": "MCA", "Grade": "B", "percentMarks": 80 },
  { "Roll_No": 3, "Course": "Btech", "Grade": "C", "percentMarks": 70 },
  { "Roll_No": 4, "Course": "BCA", "Grade": "A", "percentMarks": 92 },
  { "Roll_No": 5, "Course": "MCA", "Grade": "B", "percentMarks": 78 },
    ]
    // dbo.collection("student").insertMany(myObj,function(err,res){
    //     if(err) throw err;
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close();
    // });
    dbo.collection("enrollment").insertMany(myObj2,function(err,res){
        if(err) throw err;
        console.log("Number of documents inserted in enrollment collection: " + res.insertedCount);
        db.close();
    });

});