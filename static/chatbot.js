document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatBox = document.getElementById('chat-box');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const input = document.getElementById('user-input');
        const message = input.value.trim();
        if (!message) return;

        // Add user message
        const userDiv = document.createElement('div');
        userDiv.textContent = You: ${message};
        chatBox.appendChild(userDiv);

        input.value = '';

        // Get bot response
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_input: message }),
        });

        const data = await response.json();
        const botDiv = document.createElement('div');
        botDiv.textContent = response.ok ? Bot: ${data.response} : "Error communicating with Dr. Dome.";
        chatBox.appendChild(botDiv);

        // Auto-scroll to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    });
});