
module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        console.log('logged')
        socket.on('chat newMsg', msg => {
            console.log(msg)
            // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            io.to(socket.myTopic).emit('chat addMsg', msg)
        })
        // socket.on('chat topic', topic => {
        //     if (socket.myTopic) {
        //         socket.leave(socket.myTopic)
        //     }
        //     socket.join(topic)
        //     socket.myTopic = topic;
        // })
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