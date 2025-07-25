const sendButton = document.getElementById('send-button');
const inputField = document.getElementById('message-input');
const channel = new BroadcastChannel('chat_channel');


channel.onmessage = (event) => {
    receiveMessage(event.data);
};

sendButton.addEventListener('click', () => {
    const message = inputField.value.trim();

    if (message) {
        sendMessage(message);
        channel.postMessage(message); 
        inputField.value = ''; 
    }
});

function sendMessage(message){
    const messagesList = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.classList.add('message', 'sent');
    messageElement.textContent = `Tú: ${message}`;
    messagesList.appendChild(messageElement);
}

function receiveMessage(message){
    const messageList = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.classList.add('message', 'received');
    messageElement.textContent = `Otro: ${message}`;
    messageList.appendChild(messageElement);
}
