const express=require('express');
//Servidor de express
const app = express();

//servidor de sockets
const server = require('http').createServer(app);

//Configuración del socket server
const io = require('socket.io')(server);

//desplegar el directorio publico
app.use(express.static(__dirname+'/public'))

io.on('connection', () => {
    console.log('Cliente conectado')
});

server.listen(8080,()=>console.log('Server en puerto 8080'));