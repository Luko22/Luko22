const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

const commands = {
    help: 'Available commands: help, about, clear',
    about: 'This is a terminal-styled website created with HTML, CSS, and JavaScript.',
    clear: function() {
        terminalOutput.innerHTML = '';
        return '';
    }
};

function processCommand(command) {
    let output = '';
    
    if (command in commands) {
        if (typeof commands[command] === 'function') {
            output = commands[command]();
        } else {
            output = commands[command];
        }
    } else {
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    return output;
}

terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = this.value.trim().toLowerCase();
        const output = processCommand(command);

        terminalOutput.innerHTML += `<div class="command">${this.value}</div>`;
        if (output) {
            terminalOutput.innerHTML += `<div class="output">${output}</div>`;
        }

        this.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

// Initial message
terminalOutput.innerHTML = '<div class="output">Welcome to the terminal. Type \'help\' for available commands.</div>';