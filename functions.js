function go() {
    swapVisibility();
}

// Hides input text box and button, unhides output text, canvas, and controls
function swapVisibility() {
    input = document.getElementById("input");
    input.style.display = "none";
    output.style.display = "inline";
}