const http = require('http');
const fs = require('fs');
const port = 7077;

const server = http.createServer(function(req,res){
    var file;

    switch (req.url) {
      case "/cars":
        file = 'cars.html';
        break;
      case "/cats":
        file = 'cats.html';
        break;
      case "/cars/new":
        file = 'form.html';
        break;
      default:
        file = null;
        break;
    }
    var image;
    switch (req.url) {
      case "/images/kitten.jpg":
        image = 'kitten.jpg';
        break;
      case "/images/cat.jpg":
        image = 'cat.jpg';
        break;
      case "/images/car.jpg":
        image = 'car.jpg';
        break;
      case "/images/car2.jpg":
        image = 'car2.jpg';
        break;
      default:
        image = null;
        break;
    }
    if(file !== null){
      fs.readFile(`views/${file}`,'utf8', function(err, content){
        if(err){ console.log(err);}
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(content);
        res.end();
      });
    } else if(req.url === '/stylesheets/style.css'){
     fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     res.writeHead(200, {'Content-type': 'text/css'});
     res.write(contents);
     res.end();
    })
    }else if(image !== null){
        fs.readFile(`./images/${image}`, function(errors, contents){
         res.writeHead(200, {'Content-type': 'image/jpg'});
         res.write(contents);
         res.end();
    });
    } else{
      res.writeHead(404);
      res.end('File not found!');
    }
});

server.listen(port, function(){
  console.log("Running on port:",port);
});
