
function changeColor(element) {

    let colors = ["green", "blue", "red"];

    let randomIndex = Math.floor(Math.random() * colors.length);

    element.style.color = colors[randomIndex];

}

// Apply click event to all h5 elements
let letters = document.querySelectorAll("h5");

letters.forEach(function(letter) {
    letter.addEventListener("click", function() {
        changeColor(this);
    });
});
