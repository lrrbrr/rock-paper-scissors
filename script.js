// function to have a random selection between rock, paper or scissors //

function getComputerChoice () {
    let computerPlay = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor (Math.random() * 3);
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
        alert ("You loose and the computer wins: " + computerSelection + " wins against " + playerSelection);
        return computerScore = computerScore + 1 ;
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")){
        alert ("You win and the computer loses: " + playerSelection + " wins against " + computerSelection);
        return playerScore = playerScore + 1 ;
     } else if (playerSelection === computerSelection) {
        alert ("It's a tie! You played " + playerSelection + ". Guess what, the computer also played "+ computerSelection);
    } else if (playerSelection != "rock" || playerSelection != "scissors" || playerSelection != "paper") {
        alert ("Hellooo, this is rock-paper-scissors. AKA you must play rock OR scissors OR paper. Duh...");
    }
}

// function to play a game which includes 5 rounds, announces the round winner, keeps track of each round's score and announces the game winner//
function game() {

    //play round 1//
    playRound ();
    alert ("Player score = " + playerScore +". "+ "Computer score = " + computerScore);

    //play round 2//
    playRound ();
    alert ("Player score = " + playerScore +". "+ "Computer score = " + computerScore);

    //play round 3//
    playRound ();
    alert ("Player score = " + playerScore +". "+ "Computer score = " + computerScore);

    //play round 4//
    playRound ();
    alert ("Player score = " + playerScore +". "+ "Computer score = " + computerScore);

    //play round 5//
    playRound ();
    alert ("Player score = " + playerScore +". "+ "Computer score = " + computerScore);

    // display winner // 
    if (computerScore > playerScore) {
        alert ("The computer wins. " +computerScore+":"+playerScore);
    }
    else if (computerScore < playerScore) {
        alert ("You win! " + playerScore+":"+computerScore);
    }
    else if (computerScore === playerScore) {
        alert ("It's a tie... Play again! "+computerScore+":"+playerScore)
    }

}

//play the game//

    // start the game at zero points for both computer and player //
    let playerScore = 0;
    let computerScore = 0;

game ();

