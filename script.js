/*difficulty buttons*/
/*difficulty buttons*/

document.getElementById("start-btn").addEventListener('click', function(){
    setText("easy");
});



function setText(difficulty){
    console.log("setText() called with difficulty: " + difficulty)
    let text;
    localStorage.setItem("text", text); // save text to local storage
    window.location.href = "TypeingPage.html"; // redirect to typing page
}


