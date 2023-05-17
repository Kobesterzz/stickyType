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
