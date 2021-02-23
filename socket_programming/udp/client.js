const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const data = Buffer.from('Sending some bytes your way.');
const PORT = 12000;

client.send(data, PORT, (err) => {
    client.close();
});
