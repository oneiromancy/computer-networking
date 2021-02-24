const net = require('net');
const PORT = 12000;

const server = net.createServer((socket) => {
    socket.on('data', (chunk) => {
        const readableChunk = chunk.toString();
        console.log(`Incoming data: ${readableChunk}`);

        console.log(`Handling uppercase conversion...`);

        const uppercaseText = readableChunk.toUpperCase();
        socket.write(uppercaseText);

        console.log(`Outgoing data: ${uppercaseText}`);
    });

    socket.on('end', () => {
        console.log('Closing connection with client\n');
        console.log(`Waiting for a new connection on port ${PORT}...\n`);
    });

    socket.on('error', (err) => {
        throw err;
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...\n`);
});
