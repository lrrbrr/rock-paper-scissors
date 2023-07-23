// function to have a random selection between rock, paper or scissors //

function getComputerChoice () {
    let computerPlay = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor (Math.random() * computerPlay.length);
    return computerPlay [randomIndex];
}

// function to play a round of the game //
function playRound() {
    
    // get the user's play through input (case insensitive) //
    let playerInput = prompt ("What's your play? Input rock, paper or scissors.");
    let playerSelection = playerInput.toLowerCase()
    console.log ("player=" + playerSelection)
    // assign a (random) play to the computer to define computer's input //
    let computerSelection = getComputerChoice();
    console.log ("computer=" + computerSelection)
    // determine winner and announce winner //
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")) {
        alert ("You loose and the computer wins: " + computerSelection + " wins against " + playerSelection)
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")){
        alert ("You win and the computer loses: " + playerSelection + " wins against " + computerSelection)
     } else if (playerSelection === computerSelection) {
        alert ("It's a tie! You played " + playerSelection + ". Guess what, the computer also played "+ computerSelection)
    } else if (playerSelection != "rock" || playerSelection != "scissors" || playerSelection != "paper") {
        alert ("Hellooo, this is rock-paper-scissors. AKA you must play rock OR scissors OR paper. Duh...")
    }
}

//play a round //
playRound ();

// add score to scoreboard //

// start next round // 