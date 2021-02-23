const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const PORT = 12000;

server.on('error', (err) => {
    throw err;
});

server.on('message', (data, rinfo) => {
    // rinfo stands for remote address information
    const { address, port } = rinfo;

    console.log(`Incoming data: ${data}`);
    console.log(`Remote address: ${address}:${port}`);
});

server.on('listening', () => {
    const { port } = server.address();

    console.log(`Server listening on port ${port}`);
});

server.bind(PORT);
