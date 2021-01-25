var http = require('http');
http.createServer(function(req,res){
    res.write('<head><meta charset="utf-8"/></head>');
    res.write('你好！');
}).listen(80);