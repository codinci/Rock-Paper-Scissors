/*
//Global variables to determine the winner
let playerScore = 0;
let computerScore = 0;
let count = 0;

//A function for random generator for selection of rock, paper or scissors
function computerSelection()
{
    let selection = ['rock', 'paper', 'scissors'];
    let random = selection[Math.floor(Math.random() * selection.length)];
    return random;
}
//A function to take in the user's input
function playerSelection()
{
    let choice = window.prompt("What's your choice?","rock");
    return choice.toLowerCase();
}
//A function to chose who wins or a tie for a specific round
function playRound(playerSelection,computerSelection)
{
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')){
        playerScore +=1;
        return "You win " + playerSelection() + " beats " + computerSelection();
    }else if(playerSelection === computerSelection)
    {
        return "Round ends with a tie, you both chose " + playerSelection();
    } else
    {
        computerScore +=1;
        return "You lose " + computerSelection() + " beats " +playerSelection();
    }    
}
//A loop to repeat the game for 5 times
function myFunction() {
    var x = "";
    for (i=0; i<5; i++) {
        retur
      x = x +"The number is " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = x;
  }
//truth = (playerSelection() == computerSelection())? "same": "Not same";
//console.log(playGame());

//Declare the winner after five rounds of play
*/