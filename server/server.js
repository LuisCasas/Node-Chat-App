const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', (message) => {
        console.log(message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: Date()
        });
    });

    socket.on('disconnect', () => {
        console.log('User disconnect from server');
    });
});


server.listen(port, () => {
    console.log(`Node server running at port: ${port}`);
});
