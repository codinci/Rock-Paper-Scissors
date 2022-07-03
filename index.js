let userScore = 0;
let compScore = 0;
let finalScore = 0;


const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoredBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const modal = document.getElementById('myModal');
const endGameMessage = document.querySelector('.message');


function main() {
    rock_div.addEventListener('click',()=> game("r"));
    paper_div.addEventListener('click',()=> game("p"));
    scissors_div.addEventListener('click',()=> game("s"));
}

main();

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

function win(userChoice, computerChoice)
{
    const userChoice_div = document.getElementById(userChoice);

    if(userChoice == 'r' && computerChoice == 's'){
        result_div.textContent = `${convertToWord(userChoice)} crashes ${convertToWord(computerChoice)}. You Win!!`;
        //console.log(`You win: Rock crashes paper`);
    }else if(userChoice == 'p' && computerChoice == 'r'){
        result_div.textContent = `${convertToWord(userChoice)} covers ${convertToWord(computerChoice)}. You Win!!`;
        //console.log(`You win: Paper covers rock`);
    }else {
        result_div.textContent = `${convertToWord(userChoice)} cut ${convertToWord(computerChoice)}. You Win!!`;
        //console.log(`You win: Scissors cut paper`);
    }

    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);

    //console.log("User Wins");
}


// setTimeout(function (){console.log("hello")}, 10000);

function lose(userChoice, computerChoice)
{
    const userChoice_div = document.getElementById(userChoice);

    if(userChoice == 's' && computerChoice == 'r'){
        result_div.textContent = `${convertToWord(computerChoice)} crashes ${convertToWord(userChoice)}. Sorry you Lost!!`;
        //console.log(`You lose: Rock crashes scissors`);
    }else if(userChoice == 'r' && computerChoice == 'p'){
        result_div.textContent = `${convertToWord(computerChoice)} covers ${convertToWord(userChoice)}. Sorry you Lost!!`;
        //console.log(`You lose: Paper covers rock`);
    }else {
        result_div.textContent = `${convertToWord(computerChoice)} cuts ${convertToWord(userChoice)}. Sorry you Lost!!`;
        //console.log(`You lose: Scissors cut paper`);
    }

    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);

    //console.log("User loses");
}

function draw(userChoice)
{
    userChoice_div = document.getElementById(userChoice);

    result_div.textContent = `You both chose: ${convertToWord(userChoice)}.Its a tie.`;

    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 1000);
    //console.log("It's a tie");
}

function game(userChoice)
{
    console.log(finalScore);
    if (finalScore == 5) return openModal(userScore, compScore);
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
            win(userChoice, computerChoice);
            userScore++;
            userScore_span.textContent = userScore;
            break;
        case "rp":
            //console.log("You lose: Paper covers rock");
        case "sr":
            //console.log("You lose: Rock crushes scissors");
        case "ps":
            //console.log("You lose: Scissors cut paper");
            lose(userChoice, computerChoice);
            compScore++;
            compScore_span.textContent = compScore;
            break;
        case "pp":
        case "rr":
        case "ss":
            //console.log("It's a tie");
            draw(userChoice);
            break;
    }
    finalScore = userScore + compScore;
    console.log(finalScore);
}

function openModal(uScore, cScore){
    modal.style.display = 'block';
    result_div.textContent = 'Game Over';
    if(uScore > cScore){
        endGameMessage.textContent = 'Congratulations You Won!!';
    } else {
        endGameMessage.textContent = 'Sorry you lost ...';
    }
}

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


