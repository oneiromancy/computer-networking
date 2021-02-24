const net = require('net');
const PORT = 12000;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = net.connect(PORT, (socket) => {
    console.log('Connected');

    rl.question('Convert text to uppercase...\n', (input) => {
        client.write(input);
    });
});

client.on('data', (data) => {
    console.log(`Incoming data: ${data}`);
    client.destroy(); // kill client after server's response
});

client.on('close', () => {
    console.log('Connection closed');
    rl.close();
});

rl.on('close', () => {
    process.exit(0);
});
