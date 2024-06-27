document.addEventListener('DOMContentLoaded', () => {
    // Game elements
    const board= document.querySelectorAll('[data-cell]');
    const messageBackgroundElement = document.getElementById('messageBackground')
    const welcomeMessageElement = document.getElementById('welcomeMessageBackground');
    const startButtonElement = document.getElementById('startButton');
    const restartButtonElement = document.getElementById('restartButton')
    const winningMessageElement = document.getElementById('winningMessage');
    const winningMessageTextElement = winningMessageElement.querySelector('h2');
    const playerScoreElement = document.getElementById('playerScore'); 
    const computerScoreElement = document.getElementById('computerScore');
   
    // Players scores start at 0
    let playerScore = 0;
    let computerScore = 0;

    // X plays first 
    let circleTurn = false;
    let playerTurn = true; 

    // Players marks
    const X_CLASS = 'x';
    const CIRCLE_CLASS = 'circle';

    // Winning Combinations
    const WINNING_COMBINATIONS = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [7, 5, 3]
    ]


     // welcome message 
     welcomeMessageElement.classList.add('show');
     startButtonElement.addEventListener('click', () => {
        welcomeMessageElement.classList.remove('show');
        startGame();
     });

     // restart button has the same action
     restartButton.addEventListener('click', startGame)

     // startGame
     function startGame() {
        circleTurn = false;
        playerTurn = true;
        board.forEach(cell => {
            cell.classList.remove(X_CLASS, CIRCLE_CLASS);
            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once:true });
        });


        document.getElementById('messageBackground').classList.remove('show');
    }


     // click handler 
     // place mark
     // computer turn
     // swap turns
     // board hover function

     // check for win
     // check for draw
     // endGame
     // update score

    
});