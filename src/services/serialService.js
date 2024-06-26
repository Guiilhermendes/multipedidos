const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')
const db = require('../database');
const net = require('net');
const pathName = 12345

// Uncomment if using any COM tool
// const port = new SerialPort({path: pathName, baudRate: 9600 });
// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// Comment if using any COM tool"
const parser = net.createConnection({ port: pathName }, () => {
    console.log('Connected to the scale simulation server');
});

parser.on('data', async (data) => {
    console.log(`Weight received: ${data}`);
    const supplierId = Math.ceil(Math.random() * 2);
    await db.query('INSERT INTO weights (weight, supplier_id) VALUES (?, ?)', [parseFloat(data), supplierId]);
});

parser.on('error', () => {
    console.log('Scale simulation server is out');
});