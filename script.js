document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    var audio = new Audio('Nokia.mp3');

    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = inputElement.value.trim();
            if (command) {
                outputElement.innerHTML += `<div>> ${command}</div>`;
                handleCommand(command);
                inputElement.value = '';
                outputElement.scrollTop = outputElement.scrollHeight;
            }
        }
    });

    function handleCommand(command){
        let response;
        switch (command.toLowerCase()) {
            case 'hello':
                response = 'Hello, World!';
                break;
            case 'date':
                response = new Date().toString();
                break;
            case 'help':
                response = 'Available commands: hello, date, help, clear, random';
                break;
            case 'clear':
                outputElement.innerHTML = '';
                return;
            case 'random':
                response = Math.round(Math.random()*(1000 - 0) + 0);
                break;
            case 'color':
                response = `${body.style.color = "white"}`;
                break; 
//------------------------------------------------------------------------------------    
            default:
                response = `You though is "${command}"`;
                break;
        }
        outputElement.innerHTML += `<div>${response}</div>`;
    }
});

