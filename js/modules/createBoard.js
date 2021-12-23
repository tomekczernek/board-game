const createBoard = (cols, rows, parent, indexId) => {
    let itemId = 1;
    for( let i = 1; i <= rows; i++){
        const row = document.createElement('div');
        row.classList.add('board-row');
        for( let x = 1; x <= cols; x++){
            const col = document.createElement('div');
            indexId ? col.setAttribute('id', `col-${indexId}-${itemId}`) : col.setAttribute('id', `col-${indexId}-${itemId}`);
            col.classList.add('board-col', 'board-col-split');
            row.appendChild(col);
            itemId++;
        }
        parent.appendChild(row);
    }
}

export default createBoard;