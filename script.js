let selection = document.getElementsByClassName("options-button")

for (var i = 0; i < selection.length; i++) {
    selection[i].onclick = function() {
        let playerSelection = this.id;
        let computerSelection = counterPlay();
    
        let winner = playRound(playerSelection, computerSelection);
        
        let playerScore = parseInt(document.getElementById("player-score").innerHTML);
        let computerScore = parseInt(document.getElementById("cpu-score").innerHTML);

        if (winner === "player") {
            playerScore += 1;
            document.getElementById("player-score").innerHTML = playerScore;
            
            document.getElementById("commentator").innerHTML = "You Win! " + firstToUpper(playerSelection) + " Beats " + firstToUpper(computerSelection) + "."
        } else if (winner === "computer") {
            computerScore += 1;
            document.getElementById("cpu-score").innerHTML = computerScore;

            document.getElementById("commentator").innerHTML = "You Lose! " + firstToUpper(playerSelection) + " is Beaten by " + firstToUpper(computerSelection) + "."
        } else {
            document.getElementById("commentator").innerHTML = "The Match Resulted in a Draw! You Both Chose " + firstToUpper(playerSelection) + "."
        }

        if (playerScore === 5 || computerScore === 5) {
            let optionButtons = document.getElementsByClassName("options-button");

            for (var i = 0; i < optionButtons.length; i++) {
                optionButtons[i].style.visibility = 'hidden';
            }

            if (playerScore > computerScore) {
                document.getElementById("commentator").innerHTML = "You Win the Game!"
            } else {
                document.getElementById("commentator").innerHTML = "The Computer Wins the Game!"
            }
        }
    }
}

document.getElementById("reset").onclick = function() {
    document.getElementById("commentator").innerHTML = "Choose an Option to Start the Game!";
    document.getElementById("player-score").innerHTML = "0";
    document.getElementById("cpu-score").innerHTML = "0";

    let optionButtons = document.getElementsByClassName("options-button");

    for (var i = 0; i < optionButtons.length; i++) {
        optionButtons[i].style.visibility = 'visible';
    }
}

function playRound(playerSelection, computerSelection) {
    let winner = "computer";
    if (playerSelection === computerSelection) {
        winner = "tie";
    } else if ((playerSelection === "scissors" && computerSelection === "paper")
                || (playerSelection === "paper" && computerSelection === "rock")
                || (playerSelection === "rock" && computerSelection === "scissors")){
        
        winner = "player";
    }

    return winner;
}

function counterPlay() {
    let num = getRandomNum(1, 4);

    switch (num) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors"
    }
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function firstToUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }