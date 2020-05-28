
module.exports = connectSockets

function connectSockets(io) {

    io.on('connection', socket => {
        console.log('connected')
        socket.on('boards updated', () => io.emit('update boards'));
        socket.on('board updated', board => {
            io.to(socket.currBoard).emit('update board', board);
        })

        socket.on('listen board', id => {
            if (socket.currBoard)
                socket.leave(socket.currBoard)
            socket.join(id)
            socket.currBoard = id;
        })
    })
}