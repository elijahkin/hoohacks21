// var images = ["images/banana.png", "images/apple.png", "images/orange.png", "images/peach.png"];
let images = {"b":"images/banana.png", "a":"images/apple.png", "o":"images/orange.png", "p":"images/peach.png"}
let transitions = ["door left", "walk", "run", "jog"];
let roomIter = 0;
let text = null;
let roomCount = 0;
// Sets up memory palace after text is inputted
function go() {
    text = document.getElementById("memtext").value.toLowerCase();
    roomCount = text.length - 1;
    updateRoom();
    swapVisibility();
}

// Hides input text box and button, unhides output text, canvas, and controls
function swapVisibility() {
    document.getElementById("input").style.display = "none";
    document.getElementById("output").style.display = "inline";
}

// Updates transition text and image with current value of roomIter
function updateRoom() {
    document.getElementById("transition").innerHTML = transitions[roomIter];
    document.getElementById("image").src = images[text[roomIter]];
}

// Increments roomIter by one, calls updateRoom
function next() {
    if (roomIter < roomCount) {
        roomIter += 1;
        updateRoom();
    }
}

// Decrements roomIter by one, calls updateRoom
function prev() {
    if (roomIter > 0) {
        roomIter -= 1;
        updateRoom();
    }
}

// Sets roomIter to zero, calls updateRoom
function restart() {
    roomIter = 0;
    updateRoom();
}