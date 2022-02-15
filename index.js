const userScore = 0;
const compScore = 0;

let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');

const scoredBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


function getComputerChoice()
{
    const options = ["r", "s", "p"];
    const random = Math.floor(Math.random() * 3);
    const option = options[random];
    return option;
}

//console.log(getComputerChoice());

function game(userChoice)
{
    //console.log("You chose: " + userChoice);
    const computerChoice = getComputerChoice();
    //console.log(`User choice =>  ${userChoice}`);
    //console.log(`Computer choice => ${computerChoice}`);  
    switch(userChoice + computerChoice)
    {
        case "pr":
            console.log("You Win: Paper covers rock");
            break;
        case "rs":
            console.log("You win: Rock crushes scissors");
            break;
        case "sp":
            console.log("You win: Scissors cut paper");
            break;
        case "rp":
            console.log("You lose: Paper covers rock");
            break;
        case "sr":
            console.log("You lose: Rock crushes scissors");
            break;
        case "ps":
            console.log("You lose: Scissors cut paper");
            break;
        case "pp":
        case "rr":
        case "ss":
            console.log("It's a tie");
            break;
    }
        
}

//game("c");
game();

function main() 
{
    rock_div.addEventListener('click',()=> game("r"));
    paper_div.addEventListener('click',()=> game("p"));
    scissors_div.addEventListener('click',()=> game("s"));
}
main();
















































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