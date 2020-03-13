let student = require('../service/studentService');
var url = require('url')

// module.exports = {
//     inf
// }
let path = new Map()
function getData(request, response) {
    // student.selectAgeAndSex(18, 'man', function (res) {
    //     response.writeHead(200)
    //     response.write(JSON.stringify(res))
    //     response.end()
    // })


    //get
    // let query = url.parse(request.url).query.split('&');
    // let num = query[0].slice(4)
    // let psw = query[1].slice(9)
    // student.login(num, (res) => {
    //     var dataString = JSON.stringify(res)
    //     var data = JSON.parse(dataString)

    //     if (data[0].password == psw) {
    //         response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
    //         response.write(JSON.stringify('成功'))
    //         response.end()
    //     } else {
    //         response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
    //         response.write(JSON.stringify('失败'))
    //         response.end()
    //     }
    // })


    //post
    request.on('data', function (data) {
        let num = JSON.parse(data).num;
        let psw = JSON.parse(data).psw;
        student.login(num, (res) => {
            if (res[0].password == psw) {
                response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                response.write(JSON.stringify('ok'))
                response.end()
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                response.write(JSON.stringify('失败'))
                response.end()
                //     }
            }
        })


    })

    // student.login(num, (res) => {
    //     var dataString = JSON.stringify(res)
    //     var data = JSON.parse(dataString)
    //     if (data[0].password == psw) {
    //         response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    //         response.write(JSON.stringify('成功'))
    //         response.end()
    //     } else {
    //         response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    //         response.write(JSON.stringify('失败'))
    //         response.end()
    //     }
    // })

}
path.set('/getData', getData)
module.exports = path;
