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
    
});