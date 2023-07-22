var fs=require('fs')
var data='Some Sample data changed'
fs.writeFile("Huehue.txt",data,function(err){
  if (err) throw err;
  console.log("File created successfully...")
})
// will override the existing file if file is already existing

// Appending the file
var data2="Huehueheuheuhh"
fs.appendFile("Huehue.txt",data2,function(err){
  if (err) throw err;
  console.log("Data Appended successfully...")
})

// Reding the file
fs.readFile("Huehue.txt",function(err,data){
  if (err) throw err;
  console.log(data.toString('utf8'));
})

// copying the file
fs.copyFile("Huehue.txt", "NewFile.txt", (err)=>{
  if (err) throw err
    console.log("\nFile Contents of copied_file:",fs.readFileSync("Huehue.txt", "utf8"));
  });

// Renaming the file
fs.rename("NewFile.txt","Cheemu.txt",(err)=>{
  if(err) throw err
  console.log("File renamed successfully")
})

// Deleting the File
fs.unlink("Huehue.txt",function(err){
  if (err) throw err;
  console.log("file deleted successfully");
})
