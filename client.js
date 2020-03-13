var net = require('net')
var socket = net.connect('12345','127.2.2.2')
// socket.write()
socket.on('connect',function(){
    console.log('客户端建立连接');
})
socket.write('hallo server')
socket.on('data',function(data){
    console.log(data.toString());
    console.log(socket.remoteAddress);
    console.log(socket.remotePort);
    console.log(socket.localAddress);
    console.log(socket.localPort);
})