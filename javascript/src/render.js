export function renderBoard(board) {
    const dead = '.';
    const living = '█'
    let output = ''
    for (let row = 0; row < 3; row++) {
        let renderRow = board[row].map(function(cell) {
            if (cell) {
                return living;
            } else {
                return dead;
            }
        })
        output += "\n" + renderRow.join(' ');
    }
    return output + "\n";
}