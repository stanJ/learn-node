'use strict'
//var greet = require('./a')
//var s = 'Jack'
//greet(s)

//process.nextTick(function(){
//	console.log('nextTick callback')
//})

var fs = require('fs')
//fs.readFile('../static/readme.txt', function (err, data) {
//	if (err) {
//		console.log(err)
//	} else {
//		console.log(data)
//		console.log(data.length + ' bytes')
//	}
//})
//try {
//	var data = fs.readFileSync('../static/readme.txt', 'utf-8')
//	console.log(data)
//} catch (err) {
//	console.log(err)
//}

//var data = 'hello, node.js'
//fs.writeFile('../static/output.txt', data, function (err) {
//	if (err) {
//		console.log(err)
//	} else {
//		console.log('finished')
//	}
//})

//fs.stat('../static/顾云昌.jpeg', function (err, stat) {
//	if (err) {
//		console.log(err)
//	} else {
//		console.log('isFile: ' + stat.isFile())
//		console.log('isDirectory: ' + stat.isDirectory())
//		if (stat.isFile()) {
//			console.log('size: ' + stat.size)
//			console.log('birth time: ' + stat.birthtime)
//			console.log('modified time: ' + stat.mtime)
//			
//		}
//	}
//})

//try {
//	var stat = fs.statSync('../static/顾云昌.jpeg')
//	console.log('isFile: ' + stat.isFile())
//	console.log('isDirectory: ' + stat.isDirectory())
//	if (stat.isFile()) {
//		console.log('size: ' + stat.size)
//		console.log('birth time: ' + stat.birthtime)
//		console.log('modified time: ' + stat.mtime)
//		
//	}
//} catch (err) {
//	console.log(err)
//}

//var rs = fs.createReadStream('../static/顾云昌.jpeg', 'base64')
//rs.on('data', function (chunk) {
//	console.log('DATA:')
//	console.log(chunk)
//})
//rs.on('end', function () {
//	console.log('END')
//})
//rs.on('error', function (err) {
//	console.log('ERROR: ' + err)
//})

//var ws1 = fs.createWriteStream('../static/output1.txt', 'utf-8')
//ws1.write('使用Stream写入文本数据...\n')
//ws1.write('END.')
//ws1.end()
//
//var ws2 = fs.createWriteStream('../static/output2.txt')
//ws2.write(new Buffer('使用Stream写入文本数据...\n', 'utf-8'))
//ws2.write(new Buffer('END.', 'utf-8'))
//ws2.end()

var rs = fs.createReadStream('../static/顾云昌.jpeg')
var ws = fs.createWriteStream('../static/顾云昌-1.jpeg')
rs.pipe(ws)


