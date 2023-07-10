function getComputerChoice()
{
    choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection)
{
    var playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1, );
    var computerSelection = computerSelection[0].toUpperCase() + computerSelection.toLowerCase().slice(1, );
    var playerWin = "You win! " + playerSelection + " beats " + computerSelection + ".";
    var computerWin = "You lose :( " + computerSelection + " beats " + playerSelection + ".";
    if(playerSelection == computerSelection) return "It's a tie!"
    else if(playerSelection == 'Rock' && computerSelection == 'Scissors') return playerWin;
    else if(playerSelection == 'Scissors' && computerSelection == 'Rock') return computerWin;
    else if(playerSelection == 'Rock' && computerSelection == 'Paper') return computerWin;
    else if(playerSelection == 'Paper' && computerSelection == 'Rock') return playerWin;
    else if(playerSelection == 'Paper' && computerSelection == 'Scissors') return computerWin;
    else if(playerSelection == 'Scissors' && computerSelection == 'Paper') return playerWin;
}

function game()
{
    var playerWin = 0;
    var computerWin = 0;
    for(let i = 0; i < 5; i++)
    {
        var 
    }
}