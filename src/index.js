const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const weightRoutes = require('./routes/weightRoutes');
const Weight = require('./models/weightModel');
require('./services/serialService');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use('/api', weightRoutes);
app.use(express.static('public'));

io.on('connection', async (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
    const latestWeight = await Weight.getLatest();
    io.emit('weight', latestWeight);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
