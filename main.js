var readline = require('readline-sync');
var discs;

// Tower visualisation towers/arrays
var towerStart = [];
var towerTemp = [];
var towerDestination = [];

// Cli visualisation names
var start = "Start";
var temp = "Temp";
var dest = "Destination";

// Basic algorithm
var moveRing = function (discs, start, temp, dest) {
    if (discs > 0) {
        moveRing(discs - 1, start, dest, temp);
        console.log("Move disc " + discs + " from " + start + " to " + dest);
        moveRing(discs - 1, temp, start, dest);
    }
};

// Using Arrays
var moveRingVisual = function (discs, towerStart, towerTemp, towerDestination) {
    if (discs > 0) {
        moveRingVisual(discs - 1, towerStart, towerDestination, towerTemp);
        towerDestination.push(towerStart.pop());
        printTowers();
        moveRingVisual(discs - 1, towerTemp, towerStart, towerDestination);
    }
};

// Helper method to print towers
// If this method is not used it will print the towers in different places in the console.log
var printTowers = function () {
    console.log("Start: " + towerStart + " Temp: " + towerTemp + " Destination: " + towerDestination);
}

// Get user input and load value in vars
var loadDiscs = function () {
    discs = readline.question("Please give number of discs to use\n")

    for (var index = 1; index <= discs; index++) {
        towerStart.push(index);
    }
    towerStart.reverse();
}

// Calls the 2 Tower Of Hanoi functions
var main = function () {
    loadDiscs();
    moveRingVisual(discs, towerStart, towerTemp, towerDestination);
    moveRing(discs, start, temp, dest);
}

// Start program
main();