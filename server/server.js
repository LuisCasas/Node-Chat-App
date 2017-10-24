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

    socket.emit('welcomeMessage', {
        from: 'Admin',
        text: 'Welcome to the Chat',
        createdAt: Date()
    });

    socket.broadcast.emit('newUser', {
        from: 'Admin',
        text: 'New user connected',
        createdAt: Date()
    });

    socket.on('createMessage', (message) => {
        console.log(message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: Date()
        });

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime
        // });
    });

    socket.on('disconnect', () => {
        console.log('User disconnect from server');
    });
});


server.listen(port, () => {
    console.log(`Node server running at port: ${port}`);
});
