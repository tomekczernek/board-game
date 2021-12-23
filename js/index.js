import createBoard from './modules/createBoard.js';
import toggleSplit from './modules/toggleSplit.js'
import { markSquare, clearSquare, makeDisable, makeEnable } from './modules/square.js';
import { getRandomArray } from './modules/random.js';

// global variable
const boardRows = 4;
const boardCols = 4;
let randomArray = [];
let currentStep = 0;
let currentSize = 1;
let interval;
let stepsCount = 5;
let userClickCount = 0;

const startGame = () => {
    randomArray = getRandomArray(1, boardRows * boardCols, stepsCount);
    makeEnable();
    numberChange();
    setCurrentText('Powodzenia!');
};

const resetGame = () => {
    clearInterval(interval);
    clearSquare();
    currentStep = 0;
    currentSize = 1;
    randomArray = [];
    userClickCount = 0;
    setCurrentGameStep();
    setCurrentUserStep();
};

const numberChange = () => {
    setCurrentGameStep();
    setCurrentUserStep();
    markSquare(randomArray[currentStep]);

    interval = window.setInterval(() => {
        clearSquare();
        currentStep++;

        if(currentStep === currentSize ) {
            clearInterval(interval);
            clearSquare();
            currentStep = 0;
        }
        else {
            markSquare(randomArray[currentStep]);
        }
    }, 600);
};

const setCurrentGameStep = () => {
    document.getElementById('currentGameStep').innerText = `${currentSize} / ${randomArray.length ? randomArray.length : stepsCount}`
};

const setCurrentUserStep = () => {
    document.getElementById('currentUserStep').innerText = `${userClickCount} / ${currentSize}`
};

const setCurrentText = (messgae) => {
    document.getElementById('currentText').innerText = messgae;
}

// listeners
gameBoard.addEventListener('click', (e) => {
    const clickedValue = parseInt((e.target.id).replace('col-1-', ''));
    document.getElementById(`col-1-${clickedValue}`).classList.add('board-col-clicked');
    setTimeout(() => document.getElementById(`col-1-${clickedValue}`).classList.remove('board-col-clicked'), 80);

    if (randomArray.length && e.target.classList.contains('board-col')) {
        
        userClickCount++;
        setCurrentUserStep();

        const stepValue = parseInt(randomArray[currentStep]);
        if(clickedValue === stepValue) {

            currentStep++;
            if(randomArray.length === currentStep){
                setCurrentText('Sukces! Spróbuj ponownie.');
                resetGame();
                makeDisable();
                return;
            }

            if(currentStep === currentSize){
                currentSize++;
                currentStep = 0;
                userClickCount = 0;
                numberChange();
            }
        }
        else{
            setCurrentText('Błąd. Spróbuj ponownie.');
            resetGame();
            makeDisable();
        }
    }
});

const updateStepsCount = (e) => {
    if(e.target.value) {
        stepsCount = e.target.value;
    }
    resetGame();
};

document.getElementById('numberOfSteps').addEventListener('input', updateStepsCount);
document.getElementById('toggleSplit').addEventListener('input', toggleSplit);
document.getElementById('startGameBtn').addEventListener('click', startGame);
document.getElementById('resetGameBtn').addEventListener('click', resetGame);

// initial board
createBoard(boardRows, boardCols, document.getElementById('masterBoard'), 0);
createBoard(boardRows, boardCols, document.getElementById('gameBoard'), 1);
setCurrentGameStep();
setCurrentUserStep();
setCurrentText('Naciśniej start');
makeDisable();