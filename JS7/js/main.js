// // //Conditionals: If Statements

// // //Syntax
// // if (condition) {
// //     //run some code
// // } else {
// //     //run some different code
// // }

// //Decision tree!
// let playerOne = "rock"; 
// let computer = "scissors";

// if (playerOne === computer) {
//     console.log("It is a tie game!");
// } else if (playerOne === "rock") {
//     if (computer === "paper") {
//         console.log(`Computer wins with ${computer}!`);
//     } else {
//         console.log(`Player wins with ${playerOne}!`);
//     }
// } else if (playerOne === "paper") {
//     if (computer === "scissors") {
//         console.log(`Computer wins with ${computer}!`);
//     } else {
//         console.log(`Player wins with ${playerOne}!`);
//     }
// } else if (playerOne === "scissors") {
//     if (computer === "rock") {
//         console.log(`Computer wins with ${computer}!`);
//     } else {
//         console.log(`Player wins with ${playerOne}!`);
//     }
// }

//Conditionals: Switch Statements

//syntax
let playerOne = "scissors";
let computer = "rock";

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
        case "rock":
            if( computer === "paper") {
                console.log("computer wins!");
            } else {
                console.log("playerOne wins!");
            }
            break;
            case "paper":
            if( computer === "scissors") {
                console.log("computer wins!");
            } else {
                console.log("playerOne wins!");
            }
            default:
                if( computer === "rock") {
                    console.log("computer wins!");
                } else {
                    console.log("playerOne wins!");
                }
}