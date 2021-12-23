const markSquare = (step) => {
    setTimeout(() => document.getElementById(`col-0-${step}`).classList.add('board-col-mark'), 100);
};

const clearSquare = () => {
    Array.from(document.querySelectorAll('.board-col-mark')).forEach((el) => el.classList.remove('board-col-mark'));
};

const makeDisable = () => {
    Array.from(document.querySelectorAll('#gameBoard .board-col')).forEach((el) => el.classList.add('board-col-mark'));
};

const makeEnable = () => {
    Array.from(document.querySelectorAll('#gameBoard .board-col')).forEach((el) => el.classList.remove('board-col-mark'));
}

export { markSquare, clearSquare, makeDisable, makeEnable };  