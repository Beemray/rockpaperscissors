let playerScore = 0;
let computerScore = 0;
let playerScoreboard = document.getElementById("playerscore");
let computerScoreboard = document.getElementById("computerscore");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

const gameText = document.getElementById("gametext");

const computerChoice = ["rock", "paper", "scissors"];

let playerSelection;

let randomNum = Math.floor(Math.random()*3);


function computerPlay () {
    let number = randomNum;
        switch(number) {
            case 0:
                return "rock"
                break;
            case 1: 
                return "paper"
                break;
            case 2:
                return "scissors"
                break;
        }
};


//Scoreboard function

function scoreBoard (player, computer){
    playerScoreboard.innerHTML = player;
    computerScoreboard.innerHTML = computer;
}
if (rock){
    rock.addEventListener("click", function() {
    rockClick();
    }
)};

paper.addEventListener("click", function() {
    paperClick();
});

scissors.addEventListener("click", function() {
    scissorClick();
});

/*Function for Computer Player*/





function rockClick() {
    playerSelection === "rock";
    computerPlay();
        if (computerPlay == playerSelection) {
            gameText.textcontent = "It/s a tie!";
        }
        else if (computerPlay = "scissors") {
            gameText.textContent = "You win! Rock beats scissors!"
            playerScore++;
        }
        else {
            gameText.textContent = "You lose. Paper beats rock.."
            computerScore++;
        };
        scoreBoard(playerScore, computerScore);
        return;
    }


  /*
function computerSelection() {
    let number = randomNum();
    switch (number) {
        case 0:
            computerPlay = "rock";
            break;
        case 1:
            computerPlay = "paper";
            break;
        case 2:
            computerPlay = "scissors";
            break;
    }
};
*/