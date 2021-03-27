let images = {"b": "banana.png", "a": "apple.png", "o": "orange.png", "p": "peach.png"};
let descriptions = {"a": "apple", "b": "banana", "o":"orangetan", "p":"peach"};
let transitions = ["In the middle of the room is a fire pole. You grab onto it and slide down.", "There are no doors in this room, so you have to punch your way out through the walls.", "Before you can get your bearings, a trap door opens up and you fall into a room below.", "There is a half-height wall along the back of this room. To get over it, you have to jump. Thankfully, there’s a trampoline nearby. You jump on it and soar over the wall.", "The next room is a highly secure vault. A long passcode is required to enter. You type in the first number you think of and the door swings open.", "You open a door on the right and creep down a spiral staircase into a room below.", "There’s also a mysterious ladder in the dimly-lit corner of the room, which you carefully climb up."];
let used = [];
let roomIter = 0;
let text = null;
let roomCount = 0;

document.onkeydown = function (e) {
    if (e.keyCode === 39) {
        next();
    } else if (e.keyCode === 37) {
        prev();
    } else if (e.keyCode === 13) {
        go();
    }
};

// Sets up memory palace after text is inputted
function go() {
    text = document.getElementById("memtext").value.toLowerCase();
    roomCount = text.length - 1;
    document.getElementById("image").height = 1 / 2 * window.innerHeight;
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
    if (used[roomIter] == null) {
        const index = Math.floor(Math.random() * transitions.length);
        used[roomIter] = transitions[index]
        transitions.splice(index, 1);
    }
    document.getElementById("transition").innerHTML = used[roomIter];
    document.getElementById("image").src = "images/" + images[text[roomIter]];
    document.getElementById("objtext").innerHTML = descriptions[text[roomIter]];
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

// Converts rooms to text
function toText() {
    let out = "";
    out += text + "\n";
    out += JSON.stringify(used);
    return out;
}

// Downloads text file containing rooms and images
function download() {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(toText()));
    element.setAttribute('download', "Memory_Palace.txt");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}