// Add event listener to all keys
document.querySelectorAll('.key').forEach(key => {
    document.addEventListener('keydown', function(event) {
        const keyChar = event.key.toLowerCase(); // get the key that was pressed
        console.log(keyChar); // replace this with your desired function

        // Get the corresponding key element and add a "pressed" class to it
        const keyElement = document.querySelector(`[data-key="${keyChar}"]`);
        if (keyElement) {
            keyElement.classList.add('pressed');
        }
    });

    document.addEventListener('keyup', function(event) {
        const keyChar = event.key.toLowerCase(); // get the key that was released

        // Get the corresponding key element and remove the "pressed" class from it
        const keyElement = document.querySelector(`[data-key="${keyChar}"]`);
        if (keyElement) {
            keyElement.classList.remove('pressed');
        }
    });
});


// Define the button element
//easy button
const easyBtn = document.getElementById('easy-btn');
function loadEasyPhrase() {
    fetch('./easy.json')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const phrase = data[randomIndex].phrase;
        document.getElementById('NeedToType').innerHTML = phrase;
      })
      .catch(error => console.error(error));
  }
easyBtn.addEventListener('click', loadEasyPhrase);


//medium button
const mediumBtn = document.getElementById('medium-btn');
function loadMediumPhrase() {
    fetch('./medium.json')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const phrase = data[randomIndex].phrase;
        document.getElementById('NeedToType').innerHTML = phrase;
      })
      .catch(error => console.error(error));
  }
mediumBtn.addEventListener('click', loadMediumPhrase);

//hard button
const hardBtn = document.getElementById('hard-btn');
function loadHardPhrase() {
    fetch('./hard.json')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const phrase = data[randomIndex].phrase;
        document.getElementById('NeedToType').innerHTML = phrase;
      })
      .catch(error => console.error(error));
  }
hardBtn.addEventListener('click', loadHardPhrase);

// Get the input element and cursor element
const inputBox = document.getElementById('inputBox');

// Add event listener to input field
inputBox.addEventListener('input', function() {
  // Get the text content of the input field
  const text = inputBox.value;
});

// Set focus on the input box on page load
window.addEventListener('load', function() {
  inputBox.focus();
});

//code for the  timer
var timerInterval;
var startTime
var timerElement = document.getElementById('timer');

//function to start the timer
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(timerInterval); // clear the interval to pause the timer
}

//function to update the timer
function updateTimer() {
  // calculate elapsed time in seconds
  var elapsedTime = Math.floor((Date.now() - startTime) / 1000)

  // Format the time in MM:SS format
  var minutes = Math.floor(elapsedTime / 60);
  var seconds = elapsedTime % 60;
  var formattedTime = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

  //updates display timer
  timerElement.textContent = formattedTime;
}

// Event listener for keydown event on the input element
inputBox.addEventListener('keydown', function(){
  if(!timerInterval){
    startTimer();
  }

  //Check if the Enter key was pressed (key code 13)
if (event.keyCode === 13){
  pauseTimer();
}
});

