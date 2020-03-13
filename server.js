var http = require('http')
var fs = require('fs')
var url = require('url')
var config = require('./config.js')
var index = require('./index.js')
var server = http.createServer((request,response)=>{
    let pathName = url.parse(request.url).pathname;
    let query = url.parse(request.url).query;
    index.judgeSource(request,response,pathName,query)

    




}).listen(config.serverconfig.port,config.serverconfig.ip)


