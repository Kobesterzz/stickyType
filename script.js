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
    /*document.getElementById("text-container").textContent = text;*/

    localStorage.setItem("text", text); // save text to local storage
    window.location.href = "TypeingPage.html"; // redirect to typing page
}

// Add event listener to all keys
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
      const keyVal = key.getAttribute('data-key');
      console.log(keyVal); // Replace with your desired function
    });
  });