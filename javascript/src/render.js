const DEAD_CELL = '.';
const LIVING_CELL = '█'


function transformRow(row) {
    return row.map(function (cell) {
        if (cell) {
            return LIVING_CELL;
        } else {
            return DEAD_CELL;
        }
    });
}

export function renderBoard(board) {
    const renderRows = board.map(function (row) {
        let renderRow = transformRow(row);
        return renderRow.join(' ');
    })
    return "\n" + renderRows.join("\n") + "\n";
}