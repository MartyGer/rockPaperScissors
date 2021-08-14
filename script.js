let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';

let gameArray = [rock, paper, scissors];

let playerScore = 0;
let compScore = 0;

randomFunc = (numArray) => {
    let random1 = Math.random() * numArray.length;
    let random2 = Math.floor(random1);
    return random2;
}

singleRound = (playerSelection, computerSelection) => {
    if (playerSelection == rock && computerSelection == paper
        || playerSelection == paper && computerSelection == scissors
        || playerSelection == scissors && computerSelection == rock) {
        compScore++;
        return 'You Lose! ' + playerSelection + ' beats ' + computerSelection;
    }

    else if (computerSelection == rock && playerSelection == paper || computerSelection == paper && playerSelection == scissors || computerSelection == scissors && playerSelection == rock) {
        playerScore++;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (playerSelection == computerSelection) {
        return 'It was a Draw! Both of you selected: ' + playerSelection;
    }
    else
        return 'You entered a wrong value!';
}

caseCorrection = (str) => {
    let result = str.charAt(0).toUpperCase() + str.substr(1);
    return result;
}

function computerPlay() {
    console.log('-----------------------------------------------');
    for (i = 0; i < 5; i++) {
        let store = randomFunc(gameArray);
        let storePlayer = caseCorrection(prompt('Enter your hand!'));

        console.log(singleRound(storePlayer, gameArray[store]));
    }
    console.log('Player Score: ' + playerScore + ', Computer Score: ' + compScore);
    console.log('-----------------------------------------------');
}

computerPlay();