var fs = require('fs')
var config = require('./config.js')
var loadWeb = require('./loadWeb')

//判断路径
function judgeSource(request, response, pathName) {
    // console.log(pathName);
    // console.log(config.staticType.includes(pathName.split('.')[1]));
    // console.log(__dirname + pathName);

    if (config.staticType.includes(pathName.split('.')[1])) {
        try {
            // console.log(__dirname + config.serverconfig.path + pathName);
            let dataFile = fs.readFileSync(__dirname + config.serverconfig.pagePath + pathName)
            response.writeHead(200);
            response.write(dataFile);
            response.end()
        } catch{
            response.writeHead("404");
            response.write("<html><body><h1>404 Not Found</h1></body></html>");
            response.end()
        }
    } else {
        // console.log(loadWeb.get(pathName));
        
        // console.log(pathName);
        // console.log(loadWeb);
        
        // console.log(loadWeb.get(pathName));
        
        if(loadWeb.get(pathName) != null ){
            loadWeb.get(pathName)(request, response)
        }else{
            response.writeHead("404");
            response.write("<html><body><h1>404 Not Found</h1></body></html>");
            response.end()
        }
    }
}

module.exports = {
    judgeSource,
}