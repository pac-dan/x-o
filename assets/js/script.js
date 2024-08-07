document.addEventListener('DOMContentLoaded', () => {
    
    // Game elements
    const boardCells = document.querySelectorAll('.cell');
    const startButtonElement = document.getElementById('startButton');
    const restartButtonElement = document.getElementById('restartButton');
    const messageBackgroundElement = document.getElementById('messageBackground');
    const welcomeMessageElement = document.getElementById('welcomeMessageBackground');
    const winningMessageElement = document.getElementById('winningMessage');
    const winningMessageTextElement = winningMessageElement.querySelector('h2');
    const boardElement = document.querySelector('.board');
    
    // sounds
    const clickSound = new Audio('assets/sounds/cell-click.mp3')
    const gameOverSound = new Audio('assets/sounds/win-sound.mp3')

    // Score area
    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');

    // Players starting stats
    let playerScore = 0;
    let computerScore = 0;
    let circleTurn = false;

    // Players marks
    const X_CLASS = 'x';
    const CIRCLE_CLASS = 'circle';

    // hover classes 
    const X_HOVER_CLASS = 'x-hover';
    const CIRCLE_HOVER_CLASS = 'circle-hover';

    // Winning Combinations
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];

   // Welcome message
   welcomeMessageElement.classList.add('show');
   startButtonElement.addEventListener('click', () => {
     welcomeMessageElement.classList.remove('show');
       startGame();
    });

    restartButtonElement.addEventListener('click', startGame);

    // Start game, clear all classes, switch turn to X, add event listeners for cells and cover class/remove hover class
    function startGame() {
        circleTurn = false;
        boardCells.forEach(cell => {
            cell.classList.remove(X_CLASS, CIRCLE_CLASS, X_HOVER_CLASS, CIRCLE_HOVER_CLASS);
            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once: true });
            cell.addEventListener('mouseover', setCellHoverClass);
            cell.addEventListener('mouseout', removeCellHoverClass);
        });
        messageBackgroundElement.classList.remove('show');
        clearWinStrikes();
    }

    // handles which cell is clicked & which turn
    function handleClick(e) {
        const cell = e.target;
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
        const timeOutSpeed = 1500;
        placeMark(cell, currentClass);
        clickSound.play();
        if (checkWin(currentClass)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
            if (circleTurn) {
                disablePlayerClicks();
                setTimeout(computerMove, timeOutSpeed);
            }
        }
    }
    
    // sets hover class based on current player
    function setCellHoverClass(e) {
        const cell = e.target;
        if (!cell.classList.contains(X_CLASS) && !cell.classList.contains(CIRCLE_CLASS)) {
            if (circleTurn) {
                cell.classList.add(CIRCLE_HOVER_CLASS);
            } else {
                cell.classList.add(X_HOVER_CLASS);
            }
        }
    }

    // removes all hover classes
    function removeCellHoverClass(e) {
        const cell = e.target;
        cell.classList.remove(X_HOVER_CLASS);
        cell.classList.remove(CIRCLE_HOVER_CLASS);
    }

    // adds x or o to cell
    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }

    // switches from circle back to "X"
    function swapTurns() {
        circleTurn = !circleTurn;
    }

    //check for winning combo
    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some((combination, combinationIndex) => {
            //change to const then create seperate loop and return
            const hasWon = combination.every(index => {
                return boardCells[index].classList.contains(currentClass);
            });
            if (hasWon) {
                drawWinStrike(combinationIndex);
            }
            return hasWon;
        });
    }

    // if all cells are full but no winning combo
    function isDraw() {
        return [...boardCells].every(cell => {
            return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
        });
    }

    //add score update 
    function endGame(draw) {
        if (draw) {
            winningMessageTextElement.innerText = 'Draw!';
        } else {
            //if o wins increment score by 1 
            if (circleTurn) {
                winningMessageTextElement.innerText = "O Wins!"
                computerScore++;
                computerScoreElement.innerText = `Computer: ${computerScore}`;
            } else {
                    winningMessageTextElement.innerText = "X Wins!"
                    playerScore++;
                    playerScoreElement.innerText = `Player: ${playerScore}`;
            }
        }
        gameOverSound.play();
        messageBackgroundElement.classList.add('show');
    }

    //to apply correct win strike 
    function drawWinStrike(combinationIndex) {
        const winStrike = document.createElement('div');
        winStrike.classList.add('win');
        switch(combinationIndex) {
            case 0:
                winStrike.classList.add('win-horizontal-1');
                break;
            case 1:
                winStrike.classList.add('win-horizontal-2');
                break;
            case 2:
                winStrike.classList.add('win-horizontal-3');
                break;
            case 3:
                winStrike.classList.add('win-vertical-1');
                break;
            case 4:
                winStrike.classList.add('win-vertical-2');
                break;
            case 5:
                winStrike.classList.add('win-vertical-3');
                break;
            case 6:
                winStrike.classList.add('win-diagonal-1');
                break;
            case 7:
                winStrike.classList.add('win-diagonal-2');
                break;
        }
        boardElement.appendChild(winStrike);
    }
    
    // removes all win strikes if any
    function clearWinStrikes() {
        const winStrike = document.querySelectorAll('.win');
        winStrike.forEach(winStrike => winStrike.remove());
        
    }

    // computer move chooses random number from index of empty cells
    function computerMove() {
        //define an empty cell
        const emptyCells = [...boardCells].filter(cell => !cell.classList.contains(X_CLASS) && !cell.classList.contains(CIRCLE_CLASS));
        //are there more moves left to make
        if (emptyCells.length === 0) return;
        const randomCell = Math.floor(Math.random() * emptyCells.length);
        const cell = emptyCells[randomCell];
        placeMark(cell, CIRCLE_CLASS);
        clickSound.play();
        if (checkWin(CIRCLE_CLASS)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
            enablePlayerClicks();
        }
    }

    function disablePlayerClicks() {
        boardCells.forEach(cell => {
            cell.removeEventListener('click', handleClick);
        });
    }

    function enablePlayerClicks() {
        boardCells.forEach(cell => {
            if (!cell.classList.contains(X_CLASS) && !cell.classList.contains(CIRCLE_CLASS)) {
            cell.addEventListener('click', handleClick, { once:true });
            }
        });
    }
});