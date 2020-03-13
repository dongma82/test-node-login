let fs = require('fs')
let config = require('./config.js')
let getData = new Map();
fs.readdir(__dirname + config.serverconfig.webPath, (err, result) => {
    if(err){
        throw err;
    } else{
        let dirLength = result.length;
        for (let i = 0; i < dirLength; i++) {
            let fn = require('' + __dirname + config.serverconfig.webPath + '/' + result[i])
            // console.log('' + __dirname + config.serverconfig.webPath + '/' + result[i]);
            // console.log(fn);
            if(fn.toString() == {}){
                return
            }
            for (let [key,value] of fn) {
                if(getData.get(key) == null){
                    getData.set(key,value)

                }
                else{
                    throw 'url异常'
                }
            }
        }
        
    }
})

module.exports = getData
