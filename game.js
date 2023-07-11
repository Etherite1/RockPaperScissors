function getComputerChoice()
{
    choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(input, computer)
{
    var playerWins = 1;
    if(input.toUpperCase() == computer.toUpperCase()) playerWins = 0;
    else if(input == 'rock' && computer == 'Paper') playerWins = -1;
    else if(input == 'paper' && computer == 'Scissors') playerWins = -1;
    else if(input == 'scissors' && computer == 'Rock') playerWins = -1;
    console.log(input + " " + computer + " " + playerWins);
    return playerWins;
}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

const btn = document.querySelector("#btnContainer");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const indiv_games = document.querySelector("#indiv-games")
const printWinner = document.querySelector("#printWinner")
player.textContent = 0
computer.textContent = 0

var playerWins = 0, computerWins = 0;

btn.addEventListener("click", function (e) {
    playerChoice = e.target['id'];
    if(playerChoice == 'newGame')
    {
        playerWins = 0;
        computerWins = 0;
        player.textContent = 0;
        computer.textContent = 0;
        indiv_games.innerHTML = "";
        printWinner.innerHTML = "";
        player.classList.remove("winner");
        player.classList.remove("loser");
        computer.classList.remove("winner");
        computer.classList.remove("loser");
        printWinner.classList.remove("winner");
        printWinner.classList.remove("loser");
    }
    else
    {
        if(playerWins == 5 || computerWins == 5) return;
        computerChoice = getComputerChoice();
        var winner = playRound(playerChoice, computerChoice);
        const winmsg = document.createElement("p");
        if(winner == 1) 
        {
            playerWins++;
            winmsg.textContent += "You win! " + capitalize(playerChoice) + " beats " + computerChoice + ".";
        }
        else if(winner == -1) 
        {
            computerWins++;
            winmsg.textContent += "You lose :( " + capitalize(playerChoice) + " loses to " + computerChoice + ".";
        }
        else
        {
            winmsg.textContent += "It's a draw. " + capitalize(playerChoice) + " draws against " + computerChoice + ".";
        }
        indiv_games.appendChild(winmsg);
        player.textContent = playerWins;
        computer.textContent = computerWins;
        if(playerWins == 5) {
            player.classList.add("winner");
            computer.classList.add("loser");
            printWinner.classList.add("winner");
            printWinner.textContent = "Congratulations, you won!";
        }
        else if(computerWins == 5) {
            computer.classList.add("winner");
            player.classList.add("loser");
            printWinner.classList.add("loser");
            printWinner.textContent = "Sorry, you lost, better luck next time :(";
        }
    }
});


// const rockButton = document.querySelector("#rock");
// const scissorsButton = document.querySelector("#scissors");
// const paperButton = document.querySelector("#paper");

// rockButton.addEventListener('click', playRound("Rock"));
// scissorsButton.addEventListener('click', playRound("Scissors"));
// paperButton.addEventListener('click', playRound("Paper"));

