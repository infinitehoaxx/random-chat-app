const socket = io();
const peer = new Peer({
    host: '/',
    port: 443,
    path: '/peerjs/myapp'
});

let currentPeerId = null;
let currentConn = null;

const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const nextButton = document.getElementById('next-button');

peer.on('open', (id) => {
    currentPeerId = id;
    socket.emit('waiting', id);
});

socket.on('matched', (partnerId) => {
    if (currentConn) {
        currentConn.close();
    }
    currentConn = peer.connect(partnerId);
    currentConn.on('open', () => {
        messagesDiv.innerHTML += '<p>Connected to a new chat partner!</p>';
    });
    setupMessageHandling();
});

peer.on('connection', (conn) => {
    if (currentConn) {
        currentConn.close();
    }
    currentConn = conn;
    setupMessageHandling();
});

function setupMessageHandling() {
    currentConn.on('data', (data) => {
        messagesDiv.innerHTML += `<p><strong>Partner:</strong> ${data}</p>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message && currentConn) {
        currentConn.send(message);
        messagesDiv.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        messageInput.value = '';
    }
}

nextButton.addEventListener('click', () => {
    if (currentConn) {
        currentConn.close();
    }
    messagesDiv.innerHTML = '';
    socket.emit('waiting', currentPeerId);
});

socket.on('partnerDisconnected', () => {
    messagesDiv.innerHTML += '<p>Your chat partner has disconnected. Click "Next Chat" to find a new partner.</p>';
    if (currentConn) {
        currentConn.close();
        currentConn = null;
    }
});
