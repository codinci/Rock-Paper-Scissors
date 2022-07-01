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

function win(userChoice, computerChoice)
{
    userScore++;
    userScore_span.textContent = userScore;
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
    compScore++;
    compScore_span.textContent = compScore;
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
            break;
        case "rp":
            //console.log("You lose: Paper covers rock");
        case "sr":
            //console.log("You lose: Rock crushes scissors");
        case "ps":
            //console.log("You lose: Scissors cut paper");
            lose(userChoice, computerChoice);
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

// function ultimateWinner(){
//     let user = userScore_span.textContent;
//     let finalScore = userScore + compScore;
//     // console.log(userScore_span.textContent);
//     if(finalScore !==5) {
//         main();
//     } else if(userScore > compScore) {
//         result_div.textContent = 'Congratulations You Won!!';
//     } else {
//         result_div.textContent = 'Sorry You Lost to the Computer';
//     }
// }

// ultimateWinner();