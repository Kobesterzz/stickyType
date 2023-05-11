/*difficulty buttons*/
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
    localStorage.setItem("text", text); // save text to local storage
    window.location.href = "TypeingPage.html"; // redirect to typing page
}

// Define the button element
const easyBtn = document.getElementById('easy-btn');

function loadEasyPhrase() {
    fetch('./easy.json')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const phrase = data[randomIndex].phrase;
        document.getElementById('text-container').innerHTML = phrase;
      })
      .catch(error => console.error(error));
  }

easyBtn.addEventListener('click', loadEasyPhrase);
