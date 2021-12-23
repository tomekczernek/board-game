const toggleSplit = (e) => {
    if(e.target.checked){
        Array.from(document.querySelectorAll('.board-col')).forEach((el) => el.classList.add('board-col-split'));
    }
    else{
        Array.from(document.querySelectorAll('.board-col')).forEach((el) => el.classList.remove('board-col-split'));
    }
};

export default toggleSplit;