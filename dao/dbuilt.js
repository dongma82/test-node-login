let mysql = require('mysql')

function createConnection (){
    var conn  =  mysql.createConnection({
        host:'127.0.0.1',
        port:3306,
        user:'root',
        password:'admin123',
        database:'test',
    });
    return conn
}

module.exports.createConnection = createConnection