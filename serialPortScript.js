const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  setInterval(() => {
    const weightData = `${Math.random() * 100}\n`;
    console.log(`Enviando dados: ${weightData}`);
    socket.write(weightData);
  }, 1000);

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(12345, () => {
  console.log('Servidor de simulação de balança ouvindo na porta 12345');
});
