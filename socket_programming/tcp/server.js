const net = require('net');
const PORT = 12000;

const server = net.createServer((socket) => {
    socket.on('data', (chunk) => {
        console.log(`Incoming data: ${chunk.toString()}`);
        socket.write('Goodbye, client! Love, Server.');
    });

    socket.on('end', () => {
        console.log('Closing connection with client');
    });

    socket.on('error', (err) => {
        throw err;
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
