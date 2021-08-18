let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';

let choices = [rock, paper, scissors];

let compScore = 0;
let playerScore = 0;

function randomFunc(arrLength) {
    let step1 = (Math.random() * 10) * arrLength / 10;
    // console.log(step1);

    let step2 = Math.floor(step1);
    // console.log(step2);

    return step2;

}

function caseCorrection(str) {
    let step1 = str.charAt(0).toUpperCase();
    let step2 = str.slice(1).toLowerCase();
    return step1 + step2;
}

computerPlay = () => {
    let computerChoice = randomFunc(choices.length);
    return caseCorrection(choices[computerChoice]);

}

// console.log(computerPlay());

// Checking who is the winner of the game!
function winner()
{
    if (playerScore > compScore)
        return 'Player wins!';
    else if (compScore > playerScore)
        return 'Computer wins!';
    else if (playerScore == compScore)
        return 'It was a draw';
    else
        return 'Something wrong happened!';
}

// To check if the player or computer has reached a count of 5 and the game stops.
function gameEnd()
{
    if (playerScore == 5 || compScore == 5) {
        divResult.textContent = ('[Final] Player Score: ' + playerScore + ', Computer Score: ' + compScore);
        winner();
        button.removeEventListener('click', (e) => {});
        return;
    }
}

playRound = (computerSelection, playerSelection) => {
    
    computerSelection = computerPlay();
    computerSelection;

    // playerSelection = caseCorrection(prompt('Enter your hand!'));
    playerSelection;

    gameEnd();

    if (playerSelection == rock && computerSelection == paper
        || playerSelection == paper && computerSelection == scissors
        || playerSelection == scissors && computerSelection == rock) {
        compScore++;
        gameEnd();
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
    else if (computerSelection == rock && playerSelection == paper
        || computerSelection == paper && playerSelection == scissors
        || computerSelection == scissors && playerSelection == rock) {
        playerScore++;
        gameEnd();
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (playerSelection == computerSelection) {
        return 'It was a Draw! Both of you selected: ' + playerSelection;
    }
    else
        return 'You entered a wrong value!';
}



// console.log(playRound());

let buttons = document.querySelectorAll('button');
let divWhoBeatWho = document.querySelector('.whoBeatWho');
let divResult = document.querySelector('.result');

// Defining computer's selection for future use!
let computerSelection;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        divWhoBeatWho.textContent = playRound(computerSelection, caseCorrection(button.value));
        divResult.textContent = ('Player Score: ' + playerScore + ', Computer Score: ' + compScore);
    });
});



