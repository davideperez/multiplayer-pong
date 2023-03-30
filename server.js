//Plain socket.io server creation

const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

const PORT = 3000

server.listen(PORT);

console.log(`Listening on port ${PORT}... `)

// VARs

let readyPlayerCount = 0;


//Event Listeners

io.on('connection', (socket) => {
    console.log('a user connected', socket.id)

    socket.on('ready', () => {
        console.log('Player ready', socket.id)
        
        readyPlayerCount++;
        
        if (readyPlayerCount === 2) {
            io.emit('startGame', socket.id) //broadcast('startGame()') This way the second player will be the referee.
        }
    })

    socket.on('paddleMove', (paddleData) => {
        socket.broadcast.emit('paddleMove', paddleData)
    })
})