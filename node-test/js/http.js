'use strict'
//var http = require('http')
//var server = http.createServer(function (request, response) {
//	console.log(request.method + ': ' + request.url)
//	response.writeHead(200, {
//		'Content-Type': 'text/html'
//	})
//	response.end('<h1>Hello world</h1>')
//})
//server.listen(8080)
//console.log('server is running at http://localhost:8080')

var fs = require('fs')
var url = require('url')
var path = require('path')
var http = require('http')
var root = path.resolve(process.argv[2] || '.')
console.log('root: ' + root)
var server = http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log('pathname: ' + pathname)
	var filepath = path.join(root, pathname);
	console.log('filepath: ' + filepath)
	fs.stat(filepath, function (err, stats) {
		if (!err && stats.isFile()) {
			console.log('200' + request.url);
			response.writeHead(200);
			fs.createReadStream(filepath).pipe(response);
		} else {
			console.log('404' + request.url);
			response.writeHead(404);
			response.end('404 Not Found');
		}
	})
})
server.listen(8080);
console.log('server is running at http://localhost:8080')