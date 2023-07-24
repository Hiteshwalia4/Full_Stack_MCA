// For html
const http=require("http");
const host="localhost";
const port=8000;

const requestListener=function(req,res){
  res.setHeader("Content-Type","text/html")
  res.writeHead(200);
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Hello world</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum natus tempora atque amet, harum, 
    obcaecati maxime est debitis dicta earum eum quas ab pariatur ut reiciendis culpa exercitationem accusamus saepe 
    odio aperiam quibusdam, excepturi provident ex eos! Consequuntur, iure natus.</p>
</body>
</html>`)
}

      const server=http.createServer(requestListener);
      server.listen(port,host,()=>{
        console.log(`Server is running on http://${host}:${port}`)
      });

// For csv
const http=require("http");
const host="localhost";
const port=8088;

const requestListener=function(req,res){
  res.setHeader("Content-Type","text/csv")
  res.writeHead(200);
  res.end(`id,name,email\n1101,ABC,huehue@gmail.com\n120,DEF,Jkgh@gmail.com`)
}

      const server=http.createServer(requestListener);
      server.listen(port,host,()=>{
        console.log(`Server is running on http://${host}:${port}`)
      });


// For plain text
const http=require("http");
const host="localhost";
const port=8088;

const requestListener=function(req,res){
  res.setHeader("Content-Type","text/plain")
  res.writeHead(200);
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  </html>`)
}

      const server=http.createServer(requestListener);
      server.listen(port,host,()=>{
        console.log(`Server is running on http://${host}:${port}`)
      });

// For json
const http=require("http");
const host="localhost";
const port=8088;

const requestListener=function(req,res){
  res.setHeader("Content-Type","application/json")
  res.writeHead(200);
  res.end(`{"message":"This is a JSON response"}`)
}

      const server=http.createServer(requestListener);
      server.listen(port,host,()=>{
        console.log(`Server is running on http://${host}:${port}`)
      });



