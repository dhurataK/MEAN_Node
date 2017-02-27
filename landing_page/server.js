const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response){
  if(request.url ==='/'){
    fs.readFile('templates/index.html','utf8', function(err, cont){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(cont);
      response.end();
    });
  }else if( request.url ==='/ninjas'){
    fs.readFile('templates/ninjas.html','utf8',function(error, content){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(content);
      response.end();
    })
  }else if(request.url === '/dojo/new'){
    fs.readFile('templates/dojos.html', 'utf8',function(error, content){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(content);
      response.end();
    });
  }else {
    response.writeHead(404);
    response.end('File not found!!!');
  }
});
server.listen(3000);
// print to terminal window
console.log("Running in localhost at port 3000");
