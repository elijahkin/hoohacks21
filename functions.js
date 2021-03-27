let images = {"b":"banana.png", "a":"apple.png", "o":"orange.png", "p":"peach.png"}
let transitions = ["door left", "walk", "run", "jog"];
let used = [];
let roomIter = 0;
let text = null;
let roomCount = 0;

document.onkeydown = function(e){
    if (e.keyCode === 39) {
        next();
    }
    else if (e.keyCode === 37) {
        prev();
    }
    else if (e.keyCode === 13) {
        go();
    }
};

// Sets up memory palace after text is inputted
function go() {
    text = document.getElementById("memtext").value.toLowerCase();
    roomCount = text.length - 1;
    document.getElementById("image").height = 1/2*window.innerHeight;
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
    if(used[roomIter] == null){
        const index = Math.floor(Math.random() * transitions.length);
        used[roomIter] = transitions[index]
        transitions.splice(index, 1);
    }
    document.getElementById("transition").innerHTML = used[roomIter];
    document.getElementById("image").src = "images/"+images[text[roomIter]];
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
function toText(){
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