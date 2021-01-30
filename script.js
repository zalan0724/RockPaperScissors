// 0 = draw, 1 = win, 2 = lose
let winTable = [[0,1,2], [2,0,1], [1,2,0]];
let items = ['Rock', 'Paper', 'Scissors'];
//Points
let playerPoints = 0;
let computerPoints = 0;
//Elements
let playerRock;
let playerPaper;
let playerScissors;
let computerRock;
let computerPaper;
let computerScissors;
let winOrNot;
let details;
let newGame;

function prepareGame(){
    playerRock = document.querySelector('#playerRock');
    playerPaper = document.querySelector('#playerPaper');
    playerScissors = document.querySelector('#playerScissors');
    computerRock = document.querySelector('#computerRock');
    computerPaper = document.querySelector('#computerPaper');
    computerScissors = document.querySelector('#computerScissors');
    winOrNot = document.querySelector('#winOrNot');
    details = document.querySelector('#details');
    newGame = document.createElement('input');
    newGame.style.display='none';
    newGame.setAttribute('type','button');
    newGame.setAttribute('value','New Game');
    newGame.style.color="white";
    newGame.style.fontSize="50pt";
    newGame.setAttribute('id','newGameButton');
    document.querySelector('#paper').appendChild(newGame);
    newGame.addEventListener('click',startNewGame);
}
function computerPlay(){
    return Math.floor(Math.random()*3);
}

function playRound(playerChoice, computerChoice){
    
    switch(playerChoice){
        case 0:
            playerRock.style.display = 'inline';
            break;
        case 1:
            playerPaper.style.display = 'inline';
            break;
        case 2:
            playerScissors.style.display = 'inline';
            break;
    }
    switch(computerChoice){
        case 0:
            computerRock.style.display = 'inline';
            break;
        case 1:
            computerPaper.style.display = 'inline';
            break;
        case 2:
            computerScissors.style.display = 'inline';
            break;
    }

    let result = winTable[computerChoice][playerChoice];
    switch(result){
        case 0:
            winOrNot.innerHTML = 'It\'s draw!';
            details.innerHTML = 'Nobody wons!';
            updateScore();
            break;
        case 1:
            winOrNot.innerHTML = 'You won!';
            details.innerHTML = `${items[playerChoice]} beats ${items[computerChoice]}!`;
            playerPoints++;
            updateScore();
            break;
        case 2:
            winOrNot.innerHTML = 'You lost!';
            details.innerHTML = `${items[computerChoice]} beats ${items[playerChoice]}!`;
            computerPoints++;
            updateScore();
            break;
    }
}
function updateScore(){
    document.getElementById('scores').innerHTML = `${playerPoints} : ${computerPoints}`;
}
function reset(){
    playerRock.style.display = 'none';
    playerPaper.style.display = 'none';
    playerScissors.style.display = 'none';
    computerRock.style.display = 'none';
    computerPaper.style.display = 'none';
    computerScissors.style.display = 'none';
}
function checkFinish(){
    if(playerPoints==5){
        winOrNot.innerHTML = 'You made it!';
        details.innerHTML = 'Congratulations!';
        askNewGame();
    }
    else if(computerPoints==5){
        winOrNot.innerHTML = 'You lost it!';
        details.innerHTML = 'Maybe next time :(';
        askNewGame();
    }

}
function askNewGame(){
    document.querySelector('#rock').style.display= 'none';
    document.querySelector('#scissors').style.display= 'none';
    document.querySelector('#paperButton').style.display='none';
    newGame.style.display='inline-block';
}
function startNewGame(){
    playerPoints=0;
    computerPoints=0;
    updateScore();
    newGame.style.display='none';
    document.querySelector('#paperButton').style.display='inline-block';
    document.querySelector('#rock').style.display='inline-block';
    document.querySelector('#scissors').style.display='inline-block';

}
function buttonClick(value){
    reset();
    playRound(value, computerPlay());
    checkFinish();
}