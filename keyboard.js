
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


var inputElement = document.getElementById('inputBox');

// Event listener for input event on the input element
inputElement.addEventListener('input', function(event) {
  var typedText = inputElement.value.trim(); // Get the current typed text
  var expectedText = getExpectedTextFromScreen().trim(); // Retrieve the expected text from the screen

  var correctText = expectedText.slice(0, typedText.length); // Extract the corresponding part of the expected text

  if (typedText !== correctText) {
    inputElement.classList.add('incorrect'); // Add a CSS class to indicate incorrect input
  } else {
    inputElement.classList.remove('incorrect'); // Remove the CSS class if the input is correct

    // Check if the typed text matches the full expected text
    if (typedText === expectedText) {
      // Handle the completion of the expected text
    }
  }
});

// Function to retrieve the expected text from the screen
function getExpectedTextFromScreen() {
  var needToTypeElement = document.getElementById('NeedToType');
  return needToTypeElement.innerText;
}

console.log(getExpectedTextFromScreen())


// Function to show the result modal
function showResultModal(wpm, mistakeCount) {
  // Update the modal content with the data
  var modalWPMElement = document.getElementById('modalWPM');
  modalWPMElement.textContent = wpm;

  var modalMistakeCountElement = document.getElementById('modalMistakeCount');
  modalMistakeCountElement.textContent = mistakeCount;

  // Get the modal element
  var modal = document.getElementById('resultModal');

  // Show the modal
  modal.style.display = 'block';

  // Get the close button element
  var closeButton = document.getElementsByClassName('close')[0];

  // Close the modal when the close button is clicked
  closeButton.onclick = function() {
    modal.style.display = 'none';
  };

  // Close the modal when clicking outside the modal content
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

// Function to update the WPM display
function updateWPM(wpm) {
  var wpmElement = document.getElementById('wpmValue');
  wpmElement.textContent = wpm;
}

// Function to update the mistake count display
function updateMistakeCount(count) {
  var mistakeCountElement = document.getElementById('mistakeCount');
  mistakeCountElement.textContent = count;
}

var inputElement = document.getElementById('inputBox');
var startTimestamp;
var wordCount = 0;
var mistakeCount = 0;
var expectedText = getExpectedTextFromScreen().trim(); // Retrieve the expected text from the screen

// Event listener for input event on the input element
inputElement.addEventListener('input', function(event) {
  var typedText = inputElement.value.trim(); // Get the current typed text

  if (typedText === '') {
    // Reset the word count and start timestamp
    wordCount = 0;
    startTimestamp = undefined;
  } else {
    // Start the timer if it hasn't started yet
    if (!startTimestamp) {
      startTimestamp = Date.now();
    }

    // Count the number of words typed
    var wordArray = typedText.split(/\s+/);
    wordCount = wordArray.length;
  }

  // Calculate the elapsed time in minutes
  var elapsedTime = (Date.now() - startTimestamp) / 1000 / 60;

  // Calculate the words per minute (WPM)
  var wpm = Math.round(wordCount / elapsedTime);

  // Update the WPM display
  updateWPM(wpm);
});

// Event listener for keydown event on the input element
inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    var typedText = inputElement.value.trim(); // Get the current typed text

    // Start the timer if it hasn't started yet
    if (!startTimestamp) {
      startTimestamp = Date.now();
    }

    // Reset the mistake count
    mistakeCount = 0;

    // Count the number of words typed
    var wordArray = typedText.split(/\s+/);

    // Increment the word count
    wordCount += wordArray.length;

    // Track mistakes
    var typedWords = typedText.split(/\s+/);
    var expectedWords = expectedText.split(/\s+/);

    for (var i = 0; i < typedWords.length; i++) {
      if (typedWords[i] !== expectedWords[i]) {
        mistakeCount++;
      }
    }

    // Calculate the elapsed time in minutes
    var elapsedTime = (Date.now() - startTimestamp) / 1000 / 60;

    // Calculate the words per minute (WPM)
    var wpm = Math.round(wordCount / elapsedTime);

    // Update the WPM display
    updateWPM(wpm);

    // Update the mistake count display
    updateMistakeCount(mistakeCount);

    // Show the result modal
    showResultModal(wpm, mistakeCount);

    // Clear the input field
    inputElement.value = '';
  }
});

// Function to retrieve the expected text from the screen
function getExpectedTextFromScreen() {
  var needToTypeElement = document.getElementById('NeedToType');
  return needToTypeElement.innerText;
}

// Set focus on the input box on page load
window.addEventListener('load', function() {
  inputElement.focus();
});
