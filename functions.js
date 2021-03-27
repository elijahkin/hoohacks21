let images = {"b": "banana.png", "a": "apple.png", "o": "orange.png", "p": "peach.png"};
let startDescription = 'You enter the first room.'
let descriptions = {
    "a":"The room contains nothing but a red apple. It looks tasty but it might be poisoned. You\'re hungry so you eat it anyways.",
    "b":"The room has some suspicious looking blue balls. They make you sad for some reason, so you continue on without playing them.",
    "c":"You find a ripe looking cabbage in this room. It reminds you of your lackluster childhood cabbage soup dinners, so you push forward without eating it.",
    "d":"This room contains a cute looking dog. You like dogs and want to make it your pet. Too bad dead animals don\'t make good pets.",
    "e":"This room contains a variety of colorful eggs. You crack a few open to see if they contain chocolates or other Easter treats, but are disappointed to find only unborn flightless birds.",
    "f":"This room contains a strange foreign man serving tasty falafels. You can\'t understand anything he says, but you happily stuff your face while he desperately tries to communicate with you.",
    "g":"This room contains a small puddle and one very angry goose. You cross the room as quickly as possible and only sustain minor injuries below the knee.",
    "h":"Hippo. You should probably run with haste. It could crush your hips as easy as you could eat a Hami Melon. You wouldn\'t even get a chance to howl.",
    "i":"This room seems to be made of ice. You\'ve never seen an igloo this large before. You hang out for a while, but leave before it begins to melt.",
    "j":"This room contains a talented Jazz band. You exit quickly as you only like Jizz, the official Star Wars Cantina music style.",
    "k":"This room contains a friendly kangaroo. It\'s a bit uncomfortable, but you try riding it for about 10 seconds.",
    "l":"You begin to lag IRL. You didn\'t get to see what was in that room since you glitched right through the entire thing. Time to reboot that darn router.",
    "m":"The bizarre woman in this room claims to be your mother, however, you believe this to be extremely unlikely as you don\'t remember her looking like this. Naturally, it doesn\'t matter either way as you have already forgotten what she looked like by the time you leave the room.",
    "n":"This room contains what appears to be a nuclear weapon. It only has a ten second window for activation, and by the time you decide whether you want to attempt to escape or just blow up this horrible labyrinth, you\'ve lost your chance.",
    "o":"This room contains an octopus eating oatcakes. You thought these things were supposed to be smart or something, but the joke it told you didn\'t really seem that funny.",
    "p":"Pants. Or, more precisely, the lack of them on you. How did you manage to leave the house without them? You\'re so paralysed with embarrassment that you don\'t notice what\'s in this room as you pass through.",
    "q":"All the answers regarding quantum mechanics are in this room.",
    "r":"Rats. Both literally and figuratively. You\'d better hurry up and leave before they force you to work as a waiter at Gusteau\'s restaurant for the rest of all eternity.",
    "s":"",
    "t":"",
    "u":"",
    "v":"",
    "w":"There is a waterfall in this room; it\'s unclear where all the water is coming from. But it\'s very serene. You enjoy the sound for a few minutes, then carry on.",
    "x":"Thank goodness, you\'ll finally be able to put your years of intense xylophone training to the test. You grab a mallet and start pounding out some sick tunes.",
    "y":"",
    "z":"",
    "0":"You discover some macaroons in this room. Since eating all of them would be gluttonous, you decide to divide the macaroons among your friends. Alas, you realize too late that you have no friends. The divide by zero error erases your macaroons from existence.",
    "1":"A bunch of rabid UVA sports fans are in this room, shouting WE ARE NUMBER ONE!!! You push past them.",
    "2":"There is a sandwich in this room. It has TWO pieces of bread.",
    "3":"In this room there is a fancy camera mounted at the top of a tripod.",
    "4":"Some children are playing foursquare in this room. You grab their ball and run off before they can catch you.",
    "5":"This room contains a table with a severed hand on it. You decide to take a hands off approach, and proceed hastily, palms sweating profusely.",
    "6":"There are a bunch of dice in this room. They all have six sides",
    "7":"There is a slot machine in this room. Each wheel displays a seven.",
    "8":"There are a bunch of plates set out on a table in this room, but all you see is crumbs. Guess someone already EIGHT all of the food.",
    "9":"There is a mean cat in this room. You have to kill it nine times."
};
let transitions = ["In the middle of the room is a fire pole. You grab onto it and slide down.", "There are no doors in this room, so you have to punch your way out through the walls.", "Before you can get your bearings, a trap door opens up and you fall into a room below.", "There is a half-height wall along the back of this room. To get over it, you have to jump. Thankfully, there\'s a trampoline nearby. You jump on it and soar over the wall.", "The next room is a highly secure vault. A long passcode is required to enter. You type in the first number you think of and the door swings open.", "You open a door on the right and creep down a spiral staircase into a room below.", "There\'s also a mysterious ladder in the dimly-lit corner of the room, which you carefully climb up."];
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
    if (roomIter > 0) {
        document.getElementById("transition").innerHTML = used[roomIter];
    } else {
        document.getElementById("transition").innerHTML = startDescription;
    }
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