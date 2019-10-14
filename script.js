function turnRed() {
    var red = document.getElementById("red");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    red.classList.add("turnRed"), red.classList.remove("turnGreen"), red.classList.remove("turnBlue");
    blue.classList.add("turnRed"), blue.classList.remove("turnGreen"), blue.classList.remove("turnBlue");
    green.classList.add("turnRed"), green.classList.remove("turnGreen"), green.classList.remove("turnBlue");
}

function turnGreen() {
    var red = document.getElementById("red");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    red.classList.add("turnGreen"), red.classList.remove("turnRed"), red.classList.remove("turnBlue");
    blue.classList.add("turnGreen"), blue.classList.remove("turnRed"), blue.classList.remove("turnBlue");
    green.classList.add("turnGreen"), green.classList.remove("turnRed"), green.classList.remove("turnBlue");
}

function turnBlue() {
    var red = document.getElementById("red");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    red.classList.add("turnBlue"), red.classList.remove("turnRed"), red.classList.remove("turnGreen");
    blue.classList.add("turnBlue"), blue.classList.remove("turnRed"), blue.classList.remove("turnGreen");
    green.classList.add("turnBlue"),green.classList.remove("turnRed"), green.classList.remove("turnGreen");
}

function removeColor() {
    var red = document.getElementById("red");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    red.classList.remove("turnRed"), red.classList.remove("turnGreen"), red.classList.remove("turnBlue");
    blue.classList.remove("turnRed"), blue.classList.remove("turnGreen"), blue.classList.remove("turnBlue");
    green.classList.remove("turnRed"), green.classList.remove("turnGreen"), green.classList.remove("turnBlue");
}