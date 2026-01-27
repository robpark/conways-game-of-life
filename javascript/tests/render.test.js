import {renderBoard} from "../src/render.js";

describe('renders the board', () => {
    it('renders a 3x3 board with dead cells', () => {
        const board = [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ]
        expect(renderBoard(board)).toBe(
            `
. . .
. . .
. . .
`
        );
    });

    it('renders a 3x3 board with living cells', () => {
        const board = [
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ]
        expect(renderBoard(board)).toBe(
            `
█ █ █
█ █ █
█ █ █
`
        );
    });

    it('renders a 3x3 board with mixed cells', () => {
        const board = [
            [false, false, true],
            [false, true, false],
            [true, false, false],
        ]
        expect(renderBoard(board)).toBe(
            `
. . █
. █ .
█ . .
`
        );
    });
});