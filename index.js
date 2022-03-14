var http=require('http');
http.createServer(function(req,res){
    res.write('fsd lab');
    res.end();
}).listen(8080);