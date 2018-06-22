let express = require('express');
let socket = require('socket.io');

// Application setup
let app = express();
let serv = app.listen(3000, () => { console.log('The server is started on port 3000') });

// App static files
app.use(express.static('html'));

// Socket.io setup
let sock = socket(serv);

sock.on('connection', (socket) => {
    console.log('Socket connection executed', socket.id);
});