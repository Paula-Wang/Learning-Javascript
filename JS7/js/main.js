// //Conditionals: If Statements

// //Syntax
// if (condition) {
//     //run some code
// } else {
//     //run some different code
// }

//Decision tree!
let playerOne = "rock"; 
let computer = "scissors";

if (playerOne === computer) {
    console.log("It is a tie game!");
} else if (playerOne === "rock") {
    if (computer === "paper") {
        console.log(`Computer wins with ${computer}!`);
    } else {
        console.log(`Player wins with ${playerOne}!`);
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        console.log(`Computer wins with ${computer}!`);
    } else {
        console.log(`Player wins with ${playerOne}!`);
    }
} else if (playerOne === "scissors") {
    if (computer === "rock") {
        console.log(`Computer wins with ${computer}!`);
    } else {
        console.log(`Player wins with ${playerOne}!`);
    }
}
