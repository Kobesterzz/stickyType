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


