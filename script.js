function sendMessage() {
    var input = document.getElementById('message-input');
    var message = input.value.toLowerCase(); // Convert to lowercase for easier matching

    if (message !== "") {
        var messageBox = document.getElementById('messages');
        var newMessage = document.createElement('div');
        newMessage.innerText = "You: " + input.value;
        messageBox.appendChild(newMessage);
        
        input.value = ''; // Clear the input field

        // Custom bot responses based on the user's input
        var botMessage = document.createElement('div');
        
        if (message.includes('projects')) {
            botMessage.innerText = "Bot: My academic projects include Developed a 2D car race game with raylib using OOPS concept in C++ and creating a catch game using Scratch.";
        } else if (message.includes('skills')) {
            botMessage.innerText = "Bot: My key skills are C, C++ and Java.";
        } else if (message.includes('education')) {
            botMessage.innerText = "Bot: I completed my B.E in Computer Science and Engineering from Madras Institute of Technology, Chennai, with a GPA of 8.16.";
        } else if (message.includes('interests')) {
            botMessage.innerText = "Bot: I enjoy playing Basketball, cricket, watching movies, playing chess, and football.";
        } else if if(message.includes('achievements')){
  botMessage.innerText=" Bot:Basketball -IntraSchool Winner. ";
}else  (isMathProblem(message)) {
            // Solve the math problem
            try {
                var result = evalMathExpression(message);
                botMessage.innerText = "Bot: The answer is " + result + ".";
            } catch (error) {
                botMessage.innerText = "Bot: Sorry, I couldn't understand that math problem.";
            }
        } else {
            botMessage.innerText = "Bot: Hi! Thanks for your message. How can I assist you?";
        }
        
        messageBox.appendChild(botMessage);
        
        // Scroll to the latest message
        messageBox.scrollTop = messageBox.scrollHeight;
    }
}

// Function to check if the message is a math problem
function isMathProblem(message) {
    return /[0-9+\-*/]/.test(message); // Looks for numbers and mathematical operators
}

// Function to safely evaluate a math expression
function evalMathExpression(message) {
    // Extract the math expression (e.g., "What is 2 + 3?" becomes "2 + 3")
    var expression = message.match(/[0-9+\-*/().\s]+/)[0];
    // Use eval to calculate the result (make sure it's a valid expression)
    return eval(expression); // This is safe in this case because the input is controlled
  }
