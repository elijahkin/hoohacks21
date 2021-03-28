let images = {"a": "a.jpg", "b": "b.jpg", "c": "c.jpg", "d": "d.jpg", "e": "e.jpg", "f": "f.jpg", "g": "g.jpg", "h": "h.jpg", "i": "i.jpg", "j": "j.jpg", "k": "k.jpg", "l": "l.jpg", "m": "m.jpg", "n": "n.jpg", "o": "o.jpg", "p": "p.jpg", "q": "q.jpg", "r": "r.jpg", "s": "s.jpg", "t": "t.jpg", "u": "u.jpg", "v": "v.jpg", "w": "w.jpg", "x": "x.jpg", "y": "y.jpg", "z": "z.jpg", "0": "0.jpg", "1": "1.jpg", "2": "2.jpg", "3": "3.jpg", "4": "4.jpg", "5": "5.png", "6": "6.jpg", "7": "7.jpg", "8": "8.jpg", "9": "9.jpg", ".": "dot.png", " ": " .jpg"};
let startDescription = 'You enter the first room.'
let descriptions = {
    "a": "The room contains nothing but a red apple. It looks tasty but it might be poisoned. You're hungry so you eat it anyways.",
    "b": "This room is full of bubbles! They blow by in the brisk breeze.",
    "c": "You find a ripe looking cabbage in this room. It reminds you of your lackluster childhood cabbage soup dinners, so you push forward without eating it.",
    "d": "This room contains a cute looking dog. You like dogs and want to make it your pet. Too bad dead animals don't make good pets.",
    "e": "This room contains a variety of colorful eggs. You crack a few open to see if they contain chocolates or other Easter treats, but are disappointed to find only unborn flightless birds.",
    "f": "This room contains a strange foreign man serving tasty falafels. You can't understand anything he says, but you happily stuff your face while he desperately tries to communicate with you.",
    "g": "This room contains a small puddle and one very angry goose. You cross the room as quickly as possible and only sustain minor injuries below the knee.",
    "h": "Hippo. You should probably run with haste. It could crush your hips as easy as you could eat a Hami Melon. You wouldn't even get a chance to howl.",
    "i": "This room seems to be made of ice. You've never seen an igloo this large before. You hang out for a while, but leave before it begins to melt.",
    "j": "This room contains a talented Jazz band. You exit quickly as you only like Jizz, the official Star Wars Cantina music style.",
    "k": "This room contains a friendly kangaroo. It's a bit uncomfortable, but you try riding it for about 10 seconds.",
    "l": "You begin to lag IRL. You didn't get to see what was in that room since you glitched right through the entire thing. Time to reboot that darn router.",
    "m": "The bizarre woman in this room claims to be your mother, however, you believe this to be extremely unlikely as you don't remember her looking like this. Naturally, it doesn't matter either way as you have already forgotten what she looked like by the time you leave the room.",
    "n": "This room contains what appears to be a nuclear weapon. It only has a ten second window for activation, and by the time you decide whether you want to attempt to escape or just blow up this horrible labyrinth, you've lost your chance.",
    "o": "This room contains an octopus eating oatcakes. You thought these things were supposed to be smart or something, but the joke it told you didn't really seem that funny.",
    "p": "Pants. Or, more precisely, the lack of them on you. How did you manage to leave the house without them? You're so paralysed with embarrassment that you don't notice what's in this room as you pass through.",
    "q": "All the answers regarding quantum mechanics are in this room.",
    "r": "Rats. Both literally and figuratively. You'd better hurry up and leave before they force you to work as a waiter at Gusteau's restaurant for the rest of all eternity.",
    "s": "A salesman assaults you the very moment you step into the room. Well, not physically. Apparently selling life insurance in a death labyrinth is a rather effective strategy.",
    "t": "A tutu wearing turtle in a tank toots a toy horn while timing talks with a tripping troll. You\'re tired of this. You leave.",
    "u": "You finally found it: the exit. Unfortunately, there is an Uno reverse card taped to the door. Completely defeated, you take a u-turn and head back the other way.",
    "v": "You find a beautiful wooden instrument in this room. You can play the violin, but unfortunately, you can\'t tell if it\'s actually a violin or just a viola. Since you can\'t play the viola you are forced to proceed with no music.",
    "w": "There is a waterfall in this room; it\'s unclear where all the water is coming from. But it\'s very serene. You enjoy the sound for a few minutes, then carry on.",
    "x": "Thank goodness, you\'ll finally be able to put your years of intense xylophone training to the test. You grab a mallet and start pounding out some sick tunes.",
    "y": "Time for a yo-yo break! You whip out your trusty yo-yo and begin performing some truly incredible tricks.",
    "z": "This room is full of zebras. As you walk through the mass of animals, you wonder what in the world they did to be forced to wear prison garb.",
    "0": "You discover some macaroons in this room. Since eating all of them would be gluttonous, you decide to divide the macaroons among your friends. Alas, you realize too late that you have no friends. The divide by zero error erases your macaroons from existence.",
    "1": "A bunch of rabid UVA sports fans are in this room, shouting WE ARE NUMBER ONE!!! You push past them.",
    "2": "There is a sandwich in this room. It has TWO pieces of bread.",
    "3": "In this room there is a fancy camera mounted at the top of a tripod.",
    "4": "Some children are playing foursquare in this room. You grab their ball and run off before they can catch you.",
    "5": "This room contains a table with a severed hand on it. You decide to take a hands off approach, and proceed hastily, palms sweating profusely.",
    "6": "There are a bunch of dice in this room. They all have six sides",
    "7": "There is a slot machine in this room. Each wheel displays a seven.",
    "8": "There are a bunch of plates set out on a table in this room, but all you see is crumbs. Guess someone already EIGHT all of the food.",
    "9": "There is a mean cat in this room. You have to kill it nine times.",
    ".": "You finally found it. An actual point mass. Maybe your Physics professor wasn\'t wasting your time after all.",
    " ": "Space. The final frontier."
};
let transitions = `In the middle of the room is a fire pole. You grab onto it and slide down.

There are no doors in this room, so you have to punch your way out through the walls.

Before you can get your bearings, a trap door opens up and you fall into another room below.

The next room is a highly secure vault. A long passcode is required to enter. You type in the first number you think of and the door swings open.

You open a door on the right and creep down a spiral staircase into a room below.

There's a mysterious ladder in the dimly-lit corner of the room, which you carefully climb up.

At the other end of the room are what look like doors to an elevator. When the doors open, it turns out to be another room.

You turn to the left and thoughtlessly walk through the doorway. You stumble as you walk off of a short ledge.

You dive through a window rolling out into another room on the other side.

You find a communicator and demand that it tell Scotty to "beam me up." Unfortunately, Scotty doesn't come through for you, so you simply walk through the door on the other side of the room.

For some reason there appears to be a train stop built into this room. You take the automated vehicle to the next stop and get off.

You find a barrel in the right hand corner of the room. You lift it above your head and jump up and down. With a flash of light, you clip through the floor into a brand new room.

On the opposite side of the room stands two massive oak doors. After struggling to open them for a few seconds, you finally get them to creak open.`.split('\n\n')
let transitionStarts = ["You enter the next room through", "To get to the next room you"];
let duplicates_starts = ["This room looks familiar. In fact this is the ", "", "", "", ""];
let duplicates_finish = [" time you\'ve been to this room.", "", "", "", ""];
let used = [];
let unused = [];
let roomIter = 0;
let text = null;
let roomCount = 0;
let aiEnabled = false;
let aiActive = false;
// let pi = ['3', '.', '1', '4', '1', '5', '9', '2', '6', '5', '3', '5', '8', '9', '7', '9', '3', '2', '3', '8', '4', '6', '2', '6', '4', '3', '3', '8', '3', '2', '7', '9', '5', '0', '2', '8', '8', '4', '1', '9', '7', '1', '6', '9', '3', '9', '9', '3', '7', '5', '1', '0', '5', '8', '2', '0', '9', '7', '4', '9', '4', '4', '5', '9', '2', '3', '0', '7', '8', '1', '6', '4', '0', '6', '2', '8', '6', '2', '0', '8', '9', '9', '8', '6', '2', '8', '0', '3', '4', '8', '2', '5', '3', '4', '2', '1', '1', '7', '0', '6', '7', '9', '8', '2', '1', '4', '8', '0', '8', '6', '5', '1', '3', '2', '8', '2', '3', '0', '6', '6', '4', '7', '0', '9', '3', '8', '4', '4', '6', '0', '9', '5', '5', '0', '5', '8', '2', '2', '3', '1', '7', '2', '5', '3', '5', '9', '4', '0', '8', '1', '2', '8', '4', '8', '1', '1', '1', '7', '4', '5', '0', '2', '8', '4', '1', '0', '2', '7', '0', '1', '9', '3', '8', '5', '2', '1', '1', '0', '5', '5', '5', '9', '6', '4', '4', '6', '2', '2', '9', '4', '8', '9', '5', '4', '9', '3', '0', '3', '8', '1', '9', '6', '4', '4', '2', '8', '8', '1', '0', '9', '7', '5', '6', '6', '5', '9', '3', '3', '4', '4', '6', '1', '2', '8', '4', '7', '5', '6', '4', '8', '2', '3', '3', '7', '8', '6', '7', '8', '3', '1', '6', '5', '2', '7', '1', '2', '0', '1', '9', '0', '9', '1', '4', '5', '6', '4', '8', '5', '6', '6', '9', '2', '3', '4', '6', '0', '3', '4', '8', '6', '1', '0', '4', '5', '4', '3', '2', '6', '6', '4', '8', '2', '1', '3', '3', '9', '3', '6', '0', '7', '2', '6', '0', '2', '4', '9', '1', '4', '1', '2', '7', '3', '7', '2', '4', '5', '8', '7', '0', '0', '6', '6', '0', '6', '3', '1', '5', '5', '8', '8', '1', '7', '4', '8', '8', '1', '5', '2', '0', '9', '2', '0', '9', '6', '2', '8', '2', '9', '2', '5', '4', '0', '9', '1', '7', '1', '5', '3', '6', '4', '3', '6', '7', '8', '9', '2', '5', '9', '0', '3', '6', '0', '0', '1', '1', '3', '3', '0', '5', '3', '0', '5', '4', '8', '8', '2', '0', '4', '6', '6', '5', '2', '1', '3', '8', '4', '1', '4', '6', '9', '5', '1', '9', '4', '1', '5', '1', '1', '6', '0', '9', '4', '3', '3', '0', '5', '7', '2', '7', '0', '3', '6', '5', '7', '5', '9', '5', '9', '1', '9', '5', '3', '0', '9', '2', '1', '8', '6', '1', '1', '7', '3', '8', '1', '9', '3', '2', '6', '1', '1', '7', '9', '3', '1', '0', '5', '1', '1', '8', '5', '4', '8', '0', '7', '4', '4', '6', '2', '3', '7', '9', '9', '6', '2', '7', '4', '9', '5', '6', '7', '3', '5', '1', '8', '8', '5', '7', '5', '2', '7', '2', '4', '8', '9', '1', '2', '2', '7', '9', '3', '8', '1', '8', '3', '0', '1', '1', '9', '4', '9', '1', '2', '9', '8', '3', '3', '6', '7', '3', '3', '6', '2', '4', '4', '0', '6', '5', '6', '6', '4', '3', '0', '8', '6', '0', '2', '1', '3', '9', '4', '9', '4', '6', '3', '9', '5', '2', '2', '4', '7', '3', '7', '1', '9', '0', '7', '0', '2', '1', '7', '9', '8', '6', '0', '9', '4', '3', '7', '0', '2', '7', '7', '0', '5', '3', '9', '2', '1', '7', '1', '7', '6', '2', '9', '3', '1', '7', '6', '7', '5', '2', '3', '8', '4', '6', '7', '4', '8', '1', '8', '4', '6', '7', '6', '6', '9', '4', '0', '5', '1', '3', '2', '0', '0', '0', '5', '6', '8', '1', '2', '7', '1', '4', '5', '2', '6', '3', '5', '6', '0', '8', '2', '7', '7', '8', '5', '7', '7', '1', '3', '4', '2', '7', '5', '7', '7', '8', '9', '6', '0', '9', '1', '7', '3', '6', '3', '7', '1', '7', '8', '7', '2', '1', '4', '6', '8', '4', '4', '0', '9', '0', '1', '2', '2', '4', '9', '5', '3', '4', '3', '0', '1', '4', '6', '5', '4', '9', '5', '8', '5', '3', '7', '1', '0', '5', '0', '7', '9', '2', '2', '7', '9', '6', '8', '9', '2', '5', '8', '9', '2', '3', '5', '4', '2', '0', '1', '9', '9', '5', '6', '1', '1', '2', '1', '2', '9', '0', '2', '1', '9', '6', '0', '8', '6', '4', '0', '3', '4', '4', '1', '8', '1', '5', '9', '8', '1', '3', '6', '2', '9', '7', '7', '4', '7', '7', '1', '3', '0', '9', '9', '6', '0', '5', '1', '8', '7', '0', '7', '2', '1', '1', '3', '4', '9', '9', '9', '9', '9', '9', '8', '3', '7', '2', '9', '7', '8', '0', '4', '9', '9', '5', '1', '0', '5', '9', '7', '3', '1', '7', '3', '2', '8', '1', '6', '0', '9', '6', '3', '1', '8', '5', '9', '5', '0', '2', '4', '4', '5', '9', '4', '5', '5', '3', '4', '6', '9', '0', '8', '3', '0', '2', '6', '4', '2', '5', '2', '2', '3', '0', '8', '2', '5', '3', '3', '4', '4', '6', '8', '5', '0', '3', '5', '2', '6', '1', '9', '3', '1', '1', '8', '8', '1', '7', '1', '0', '1', '0', '0', '0', '3', '1', '3', '7', '8', '3', '8', '7', '5', '2', '8', '8', '6', '5', '8', '7', '5', '3', '3', '2', '0', '8', '3', '8', '1', '4', '2', '0', '6', '1', '7', '1', '7', '7', '6', '6', '9', '1', '4', '7', '3', '0', '3', '5', '9', '8', '2', '5', '3', '4', '9', '0', '4', '2', '8', '7', '5', '5', '4', '6', '8', '7', '3', '1', '1', '5', '9', '5', '6', '2', '8', '6', '3', '8', '8', '2', '3', '5', '3', '7', '8', '7', '5', '9', '3', '7', '5', '1', '9', '5', '7', '7', '8', '1', '8', '5', '7', '7', '8', '0', '5', '3', '2', '1', '7', '1', '2', '2', '6', '8', '0', '6', '6', '1', '3', '0', '0', '1', '9', '2', '7', '8', '7', '6', '6', '1', '1', '1', '9', '5', '9', '0', '9', '2', '1', '6', '4', '2', '0', '1', '9', '8', '9'];

document.onkeydown = function (e) {
    if (e.keyCode === 39 && !aiActive) {
        next();
    } else if (e.keyCode === 37 && !aiActive) {
        prev();
    } else if (e.keyCode === 13 && !aiActive) {
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
    document.getElementById("output").style.display = "block";
}

// Updates transition text and image with current value of roomIter
function updateRoom() {
    if (unused.length < 1) {
        unused = [...transitions];
    }
    if (used[roomIter] === undefined && roomIter !== 0) {
        if(aiEnabled){
            aiActive = true;
            document.getElementById("next").disabled = true;
            document.getElementById("prev").disabled = true;
            document.getElementById("restart").disabled = true;
            gptTransition().then( gre => {
                used[roomIter] = gre;
                document.getElementById("transition").innerHTML = used[roomIter];
                document.getElementById("next").disabled = false;
                document.getElementById("prev").disabled = false;
                document.getElementById("restart").disabled = false;
                aiActive = false;
            });
        }
        else {
            const index = Math.floor(Math.random() * unused.length);
            used[roomIter] = unused[index]
            unused.splice(index, 1);
        }
    }

    document.getElementById("image").animate([{opacity: 1}, {opacity: 0}], 1000);

    if (roomIter === 0) {
        document.getElementById("transition").innerHTML = startDescription;
    }
    else {
        if(used[roomIter] === undefined) {
            document.getElementById("transition").innerHTML = "Loading AI Generation From Server";
        }
        else{
            document.getElementById("transition").innerHTML = used[roomIter];
        }
    }

    document.getElementById("image").src = "images/" + images[text[roomIter]];

    let display_str = text[roomIter].toUpperCase() + ": ";
    let repeat = (text.substring(0, roomIter).split(text[roomIter]).length);
    if(repeat >= 2){
        display_str += duplicates_starts[0];
        display_str += repeat + nth(repeat)
        display_str += duplicates_finish[0];
    }
    display_str += descriptions[text[roomIter]];
    document.getElementById("objtext").innerHTML = display_str;

    document.getElementById("image").animate([{opacity: 0}, {opacity: 1}], 1000);
}

function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}

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

function toggleAI() {
    if (aiEnabled) {
        // turn off
        document.getElementById("aibutton").style.backgroundColor = "initial";
        document.getElementById("aibutton").style.color = "#9167c2";
    } else {
        // turn on
        document.getElementById("aibutton").style.backgroundColor = "#9167c2";
        document.getElementById("aibutton").style.color = "white";

    }
    aiEnabled = !aiEnabled;
}
const themes = `You are wandering through a deserted memory palace full of bizarre and colorful objects.

You are exploring a deserted haunted house. Everything you see is extremely spooky.

You are exploring a deserted castle. Everything you see is very memorable.`.split('\n\n')

async function gptTransition() {
    let indices = []
    let prompt = themes[1] + ' '
    // let prompt = themes[Math.floor(Math.random() * themes.length)] + ' '
    for (let i = 0; i < 1; i++) {
        let idx
        do {
            idx = Math.floor(Math.random() * transitions.length)
        } while (indices.includes(idx))
        indices.push(idx)
        prompt += transitions[idx] + ' '
    }
    const transitionStart = transitionStarts[Math.floor(Math.random() * transitionStarts.length)]
    prompt += transitionStart

    console.log(`Prompt: ${prompt}`)
    const res = await fetch(`https://gpt2-grn5g74yeq-uk.a.run.app/?length=150&temperature=0.3&prompt=${encodeURIComponent(prompt)}`)
    const json = await res.json()
    const sentences = json.text.split('.')
    // const maxSentences = Math.random() > 0.5 ? 3 : 2
    const maxSentences = 2
    const nSentences = Math.min(maxSentences, sentences.length - 1)
    return transitionStart + sentences.slice(0, nSentences).join('.') + '.'
}