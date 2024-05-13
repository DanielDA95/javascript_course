let playerOne = 'Elena';
let playerTwo = 'Yeni';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

//Ejercicio de la guia. 
function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";

    // Swap the values using a temporary variable
    let temp = rightLane;
    rightLane = leftLane;
    leftLane = temp;

    return `That ${rightLane} and ${leftLane} won't pick a lane`;
}

console.log(roadRage()); // Output: "That Honda and Chevy won't pick a lane"
