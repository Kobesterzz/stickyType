const phrase = document.getElementById("phrase").textContent; // get the phrase
let currentIndex = 0; // keep track of the current character index

document.getElementById("textInput").addEventListener("input", function(event) {
  const userInput = event.target.value;
  const lastTypedCharacter = userInput[userInput.length - 1];

  if (lastTypedCharacter === phrase[currentIndex]) {
    // correct character was typed, move to the next one and update the displayed phrase
    currentIndex++;
    event.target.value = ""; // clear the input field
    updatePhraseDisplay(); // update the phrase with correct and remaining characters highlighted
  } else {
    // incorrect character was typed, do nothing for now
  }
});

function updatePhraseDisplay() {
  const phraseEl = document.getElementById("phrase");
  const correctSpan = `<span class="correct">${phrase.slice(0, currentIndex)}</span>`;
  const remainingSpan = `<span class="remaining">${phrase.slice(currentIndex)}</span>`;
  phraseEl.innerHTML = correctSpan + remainingSpan;

  // make correct letters darker
  const correctLetters = phraseEl.querySelectorAll(".correct");
  correctLetters.forEach((letterEl) => {
    letterEl.classList.add("correct");
  });

  // gray out remaining letters
  const remainingLetters = phraseEl.querySelectorAll(".remaining");
  remainingLetters.forEach((letterEl) => {
    letterEl.classList.add("remaining");
  });
}

