document.addEventListener('DOMContentLoaded', () => {
    // Game elements
    const board = document.querySelectorAll('[data-cell]');
    const boardElement = document.querySelector('.board');
    const messageBackgroundElement = document.getElementById('messageBackground');
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

    // Players marks
    const X_CLASS = 'x';
    const CIRCLE_CLASS = 'circle';

    const hoverCircle = 'circle-hover';
    const hoverX = 'x-hover';

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
    ];


     // welcome message 
     welcomeMessageElement.classList.add('show');
     startButtonElement.addEventListener('click', () => {
        welcomeMessageElement.classList.remove('show');
        startGame();
     });

     // restart button has the same action
     restartButton.addEventListener('click', startGame);

     function setBoardHoverClass() {
        board.classList.remove(hoverCircle, hoverX)
        if (circleTurn) {
            board.classList.add(hoverCircle)
        } else {
            board.classList.add(hoverX)
        }
     }

     // startGame
     function startGame() {
        circleTurn = false;
        board.forEach(cell => {
            cell.classList.remove(X_CLASS, CIRCLE_CLASS, 'x-hover', 'circle-hover');
            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once:true });
        });

        setBoardHoverClass();
        document.getElementById('messageBackground').classList.remove('show');
    }

    function handleClick(e) {
        const cell = e.target;
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
        placeMark(cell, currentClass);
        //checkwin
        //draw
        swapTurns();
        setBoardHoverClass();
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }

    function swapTurns(){
        circleTurn = !circleTurn;
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