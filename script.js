/*difficulty buttons*/

document.getElementById("easy-btn").addEventListener('click', function(){
    setText("easy");
});

document.getElementById("medium-btn").addEventListener('click', function(){
    setText("medium");
});

document.getElementById("hard-btn").addEventListener('click', function(){
    setText("hard");
});

function setText(difficulty){
    console.log("setText() called with difficulty: " + difficulty)
    let text;
    if(difficulty === "easy"){
        text = 'This is an easy text to type.'
    }else if (difficulty === "medium"){
        text = 'This is an medium text to type.'
    }else if (difficulty === "hard"){
        text = 'This is an hard text to type.'
    }
    localStorage.setItem("text", text); // save text to local storage
    window.location.href = "TypeingPage.html"; // redirect to typing page
}

// Define the button element
const easyBtn = document.getElementById('easy-btn');

// Attach a click event listener to the button
easyBtn.addEventListener('click', () => {
  // Load the JSON file using a Fetch API
  fetch('easy.json')
    .then(response => response.json())
    .then(data => {
      // Choose a random phrase from the loaded JSON data
      const randomPhrase = data[Math.floor(Math.random() * data.length)].phrase;
      
      // Display the chosen phrase on the typing screen
      const typingScreen = document.getElementById('typing-screen');
      typingScreen.textContent = randomPhrase;
    });
});
