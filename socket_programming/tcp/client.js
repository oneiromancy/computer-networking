const net = require('net');
const PORT = 12000;

const client = net.connect(PORT, (socket) => {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', (data) => {
    console.log(`Incoming data: ${data}`);
    client.destroy(); // kill client after server's response
});

client.on('close', () => {
    console.log('Connection closed');
});
