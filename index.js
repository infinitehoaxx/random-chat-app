const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/myapp'
});

app.use('/peerjs', peerServer);
app.use(express.static('public'));

const waitingUsers = new Set();
const activeChats = new Map();

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('waiting', (peerId) => {
    if (waitingUsers.size > 0) {
      const match = waitingUsers.values().next().value;
      waitingUsers.delete(match);
      socket.emit('matched', match);
      io.to(match).emit('matched', peerId);
      activeChats.set(peerId, match);
      activeChats.set(match, peerId);
    } else {
      waitingUsers.add(peerId);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    waitingUsers.delete(socket.id);
    if (activeChats.has(socket.id)) {
      const partner = activeChats.get(socket.id);
      io.to(partner).emit('partnerDisconnected');
      activeChats.delete(socket.id);
      activeChats.delete(partner);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});