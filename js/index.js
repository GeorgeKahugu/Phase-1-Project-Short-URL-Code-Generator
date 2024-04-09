document.addEventListener('DOMContentLoaded', function () {
    fetch('https://cleanuri.com/docs')
     // Get the container element
const container = document.getElementById('textbox-container');

// Create a text box element
const textBox = document.createElement('input');

// Set attributes for the text box
textBox.setAttribute('type', 'text');
textBox.setAttribute('placeholder', 'Enter your URL ');

// Append the text box to the container
container.appendChild(textBox);

document.getElementById('myButton').addEventListener('click', function() {
    // Perform actions when the button is clicked
    var textValue = document.getElementById('myTextBox').value;
    alert('You entered: ' + textValue);

// Generating a prompt 
    const generateButton = document.getElementById("generateButton");

    generateButton.addEventListener("click", function() {
      const inputText = document.getElementById("inputText").value;
      if (inputText.trim() === "") {
        alert("No code Generated");
      } else {
        // Add your code generation logic here if the text box is not empty
        console.log("Code Generated:", inputText);
      }
    });
  });
  
  
  });
  