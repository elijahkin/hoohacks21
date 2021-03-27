// Sets up memory palace after text is inputted
function go() {
    roomIter = 0;
    roomCount = document.getElementById("memtext").value.length - 1;
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
    document.getElementById("transition").innerHTML = roomIter;
    document.getElementById("image").src = "images/orange.png";
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