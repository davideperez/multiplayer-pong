//Plain socket.io server creation
const http = require('http')
const io = require('socket.io')

       
const apiServer = require('./api')
const httpServer = http.createServer(apiServer)
const sockets = require('./sockets')

const socketServer = io(httpServer)

const PORT = 3000

//Server Start

httpServer.listen(PORT);

console.log(`Listening on port ${PORT}... `)

sockets.listen(socketServer)