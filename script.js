const phrase = document.getElementById("phrase").textContent; // get the phrase
let currentIndex = 0; // keep track of the current character index

document.getElementById("textInput").addEventListener("input", function(event) {
  const userInput = event.target.value;
  const lastTypedCharacter = userInput[userInput.length - 1];

  if (lastTypedCharacter === phrase[currentIndex]) {
    // correct character was typed, move to the next one
    currentIndex++;
    event.target.value = ""; // clear the input field
    displayPhrase(); // update the phrase with correct and remaining characters highlighted
  } else {
    // incorrect character was typed, do nothing for now
  }
});

function displayPhrase() {
  const correctSpan = `<span class="correct">${phrase.slice(0, currentIndex)}</span>`;
  const remainingSpan = `<span class="remaining">${phrase.slice(currentIndex)}</span>`;
  document.getElementById("phrase").innerHTML = correctSpan + remainingSpan;
}
