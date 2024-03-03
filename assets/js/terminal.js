'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const terminalPopup = document.getElementById("terminalPopup");
    const closeButton = document.getElementById("closeButton");
    const terminalInput = document.getElementById("terminalInput");
    const terminalContent = document.querySelector(".terminal-content");
    const openTerminalButton = document.getElementById("openTerminalButton");

    // Function to open or close the terminal popup
    function toggleTerminal() {
        if (terminalPopup.style.display === "block") {
            terminalPopup.style.display = "none";
            openTerminalButton.style.display = "block";
        } else {
            terminalPopup.style.display = "block";
            openTerminalButton.style.display = "none";
        }
    }

    // Function to scroll to the bottom of the terminal content
    function scrollToBottom() {
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    // Function to escape HTML characters
    function escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    // Function to simulate typewriter effect with hacker-style animation
    function typeWriter(text) {
        const outputElement = document.createElement("p");
        outputElement.innerHTML = `<span class="terminal-output">$codeWithEdison/</span> `;
        terminalContent.appendChild(outputElement);
        scrollToBottom();

        let index = 0;
        const typingInterval = setInterval(function () {
            if (index < text.length) {
                outputElement.innerHTML += escapeHtml(text.charAt(index));
                scrollToBottom();
                index++;
            } else {
                clearInterval(typingInterval); // Stop the typing animation
            }
        }, 90); // Adjust the typing speed here (in milliseconds)
    }


    var element1 =  document.getElementsByClassName("navbar-link")[0];
    var element2 =  document.getElementsByClassName("navbar-link")[1];
    var element3 =  document.getElementsByClassName("navbar-link")[2];
    var element5 =  document.getElementsByClassName("navbar-link")[3];

    var clickEvent = new Event("click", {
        bubbles: true,
        cancelable: true
      });

    // Event listeners
    closeButton.addEventListener("click", toggleTerminal);
    openTerminalButton.addEventListener("click", toggleTerminal);
    
    // Function to handle user input
    function handleCommand(command) {
        switch (command.toLowerCase()) {
            case "about":
                // Scroll to the Home section
                element1.dispatchEvent(clickEvent);
                toggleTerminal();
                break;
            case "resume":
                // Scroll to the About Me section
                element2.dispatchEvent(clickEvent);
                toggleTerminal();
                break;
            case "portfolio":
                element3.dispatchEvent(clickEvent);
                toggleTerminal();
                break;
            // case "blog":
            //     element4.dispatchEvent(clickEvent);
            //     break;
            case "contact":
                // Scroll to the Blog section
                element5.dispatchEvent(clickEvent);
                toggleTerminal();
                break;
            case "clear":
                // Clear the terminal content
                terminalContent.innerHTML = "";
                break;
                case "exit":
                    toggleTerminal();
                    break;
            case "help":
                // Display the help message with hacker-style typewriter effect
                typeWriter(`
                    Type one of the following commands: ------------->

                     about - Go to the About Me section ------------>
                     portfolio - Go to the Portfolio section -------->
                     contact - Go to the Contact section ------------->
                     blog - Go to the Blog section ------------------->
                     clear - Clear the terminal -------------------->
                     exit - to close terminal --------------------->
                     help - Display this help message. 
                   `);
                break;
            default:
                // Display an error message for invalid commands with typewriter effect
                typeWriter(`Invalid command: ${escapeHtml(command)}. Type "help" for a list of commands.`);
        }

        // Clear the input field
        terminalInput.value = "";
    }

    // Listen for user input
    terminalInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const input = terminalInput.value;
            handleCommand(input);
        }
    });
});

