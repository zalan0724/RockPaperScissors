// 0 = draw, 1 = win, 2 = lose
let winTable = [[0,1,2], [2,0,1], [1,2,0]];
let items = ['Rock', 'Paper', 'Scissors'];
let playerPoints = 0;
let computerPoints = 0;

function computerPlay(){
    return Math.floor(Math.random()*3);
}

function playRound(playerChoice, computerChoice){
    
    switch(playerChoice){
        case 0:
            document.getElementById('playerRock').style.display = 'inline';
            break;
        case 1:
            document.getElementById('playerPaper').style.display = 'inline';
            break;
        case 2:
            document.getElementById('playerScissors').style.display = 'inline';
            break;
    }
    switch(computerChoice){
        case 0:
            document.getElementById('computerRock').style.display = 'inline';
            break;
        case 1:
            document.getElementById('computerPaper').style.display = 'inline';
            break;
        case 2:
            document.getElementById('computerScissors').style.display = 'inline';
            break;
    }

    let result = winTable[computerChoice][playerChoice];
    switch(result){
        case 0:
            document.getElementById('winOrNot').innerHTML = 'It\'s draw!';
            document.getElementById('details').innerHTML = 'Nobody wons!';
            updateScore();
            break;
        case 1:
            document.getElementById('winOrNot').innerHTML = 'You won!';
            document.getElementById('details').innerHTML = `${items[playerChoice]} beats ${items[computerChoice]}!`;
            playerPoints++;
            updateScore();
            break;
        case 2:
            document.getElementById('winOrNot').innerHTML = 'You lost!';
            document.getElementById('details').innerHTML = `${items[computerChoice]} beats ${items[playerChoice]}!`;
            computerPoints++;
            updateScore();
            break;
    }
}
function updateScore(){
    document.getElementById('scores').innerHTML = `${playerPoints} : ${computerPoints}`;
}
function reset(){
    document.getElementById('playerRock').style.display = 'none';
    document.getElementById('playerPaper').style.display = 'none';
    document.getElementById('playerScissors').style.display = 'none';
    document.getElementById('computerRock').style.display = 'none';
    document.getElementById('computerPaper').style.display = 'none';
    document.getElementById('computerScissors').style.display = 'none';
}

function buttonClick(value){
    reset();
    playRound(value, computerPlay());
}