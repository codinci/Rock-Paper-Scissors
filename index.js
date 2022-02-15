let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoredBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice()
{
    const options = ["r", "s", "p"];
    const random = Math.floor(Math.random() * 3);
    const option = options[random];
    return option;
}

//console.log(getComputerChoice());

function convertToWord(letter)
{
    return (letter == 'r'? "Rock"
            :letter == 'p' ? "Paper"
            :"Scissors");
}

function convertToLetter(word)
{
    return (word == 'rock'? "r"
            :word == 'paper' ? "p"
            :"s");
}

function win(userChoice,computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    if(userChoice == 'r' && computerChoice == 's'){
        result_div.innerHTML = `${convertToWord(userChoice)} crashes ${convertToWord(computerChoice)}. You Win!!`;
        //console.log(`You win: Rock crashes paper`);
    }else if(userChoice == 'p' && computerChoice == 'r'){
        result_div.innerHTML = `${convertToWord(userChoice)} covers ${convertToWord(computerChoice)}. You Win!!`;
        //console.log(`You win: Paper covers rock`);
    }else {
        result_div.innerHTML = `${convertToWord(userChoice)} cut ${convertToWord(computerChoice)}. You Win!!`;
        //console.log(`You win: Scissors cut paper`);
    }
    
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function (){document.getElementById(userChoice).classList.remove('green-glow')}, 3000);

    //console.log("User Wins");
    //console.log(userScore);
}

setTimeout(function (){console.log("hello")}, 10000);


function lose(userChoice,computerChoice)
{
    compScore++;
    compScore_span.innerHTML = compScore;
    if(userChoice == 's' && computerChoice == 'r'){
        result_div.innerHTML = `${convertToWord(computerChoice)} crashes ${convertToWord(userChoice)}. Sorry you Lost!!`;
        //console.log(`You lose: Rock crashes scissors`);
    }else if(userChoice == 'r' && computerChoice == 'p'){
        result_div.innerHTML = `${convertToWord(computerChoice)} covers ${convertToWord(userChoice)}. Sorry you Lost!!`;
        //console.log(`You lose: Paper covers rock`);
    }else {
        result_div.innerHTML = `${convertToWord(computerChoice)} cut ${convertToWord(userChoice)}. Sorry you Lost!!`;
        //console.log(`You lose: Scissors cut paper`);
    }

    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function (){document.getElementById(userChoice).classList.remove('red-glow')}, 3000);

    //console.log("User loses");
}

function draw(userChoice)
{
    result_div.innerHTML = `You both chose: ${convertToWord(userChoice)}.Its a tie.`;

    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function (){document.getElementById(userChoice).classList.remove('grey-glow')}, 3000);
    //console.log("It's a tie");
}

function game(userChoice)
{
    //console.log("You chose: " + userChoice);
    const computerChoice = getComputerChoice();
    //console.log(`User choice =>  ${userChoice}`);
    //console.log(`Computer choice => ${computerChoice}`);  
    switch(userChoice + computerChoice)
    {
        case "pr":
            //console.log("You Win: Paper covers rock");
        case "rs":
            //console.log("You win: Rock crushes scissors");
        case "sp":
            //console.log("You win: Scissors cut paper");
            win(userChoice,computerChoice);
            break;
        case "rp":
            //console.log("You lose: Paper covers rock");
        case "sr":
            //console.log("You lose: Rock crushes scissors");
        case "ps":
            //console.log("You lose: Scissors cut paper");
            lose(userChoice,computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            //console.log("It's a tie");
            draw(userChoice);
            break;
    }
        
}

//game("c");

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