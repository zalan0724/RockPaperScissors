function computerPlay(){
    return Math.floor(Math.random()*3);
}
function playerPlay(){
    let input = prompt('Rock, Paper or Scissors?');
    let playerChoice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); 
    switch(playerChoice){
        case 'Rock':
            return 0;
        case 'Paper':
            return 1;
        case 'Scissors':
            return 2;
    }
}
 function playRound(computerChoice, playerChoice){
    // 0 = draw, 1 = win, 2 = lose
    let winTable = [[0,1,2], [2,0,1], [1,2,0]];
    let result = winTable[parseInt(computerChoice)][parseInt(playerChoice)];
    let items = ['Rock', 'Paper', 'Scissors'];

    switch(result){
        case 0:
            console.log('It\'s draw!');
            return '00';
        case 1:
            console.log(`You win! ${items[playerChoice]} beats ${items[computerChoice]}`);
            return '10';
        case 2:
            console.log(`You Lose! ${items[computerChoice]} beats ${items[playerChoice]}`);
            return '01';
    }
 }

 function playGame(){
    alert('It\'s a console game!');
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i=0; i<5; i++){
        let points = playRound(computerPlay(), playerPlay());
        playerPoints += parseInt(points.charAt(0));
        computerPoints += parseInt(points.charAt(1));
        console.log(playerPoints + ' : ' + computerPoints);
     }
    if(playerPoints>computerPoints) console.log('You won the game!');
    else console.log('You lost the game!');
 }