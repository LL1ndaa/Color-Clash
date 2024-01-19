/**
 * ColourClash.test.js is a module to test "Colour Clash".
 * @namespace ColourClash
 * @author Linda
 * @version 2023
 */

import R from "../ramda.js";
import ColourClash from "../ColourClash.js";
// describe("Top level description", function(){

//     it("Item level description", function(){
//         throw new Error("Error message");//what is tha means?
//     });
// });
// const display_functions = {
//     "json": JSON.stringify

// };

// const display_board = function (board) {
// };

/**
 * The function test whether empty_board successfully generated.
 * @memberof ColourClash.test
 * @function empty_board_test
 * @throws if the board fail to create.
 */
describe("empty_board_test", function () {
    it(`Given board two parameter: row and col,
        Then it return an empty board with
        row * col and filled with 0`, function () {
        const empty_board = ColourClash.empty_board();
        const all_free_slots = R.pipe(
            R.flatten,
            R.all(R.equals(0))
        )(empty_board);
        if (!all_free_slots) {
            throw new Error(`connot generate a new board`);

        }
    });
});

/**
 * The function test whether currentPlayer initialize.
 * @memberof ColourClash.test
 * @function currentPlayer_test
 * @throws if the board fails return 0.
 */

describe("currentPlayer_test", function () {

    it(`Given a currentPlayer when game start,
      Then it can only return 0, because neither re
      player nor blue player start playering now`, function () {
        // expect(ColourClash.currentPlayer()).to.equal('0')
        if (ColourClash.currentPlayer() !== "0") {
            throw new Error("CurrentPlayer not setting");
        }

    });

});


/**
 * The function test whether token can be assign to the board.
 * @memberof ColourClash.test
 * @function makeMove_test
 * @throws if return falue and cannot makeMove.
 */
describe("makeMove_test", function () {
    it(`Given makeMove a value that is board[row][col]
        when user click, compare it with hand(player
        board[row][col] that user previously select.
        Then it will return true. If board is equal to 0)`, function () {
        const board_r_c = 0;
        const hand = 1;
        const result = ColourClash.makeMove(board_r_c, hand);
        if (result !== true) {
            throw new Error(`makeMove:when board equals to zero not work`);
        }
    });


    it(`Given makeMove a value that is board[row][col]
        when user click, compare it with hand(player
        board[row][col] that user previously select.
        Assume the board[row][col]already be occupied by middle red(2),
        then assign a darker blue(-3) to the same cell,
        The the resulting will be: true(this cell will
        be darker blue) )`, function () {
        const board_r_c = 2;
        const hand = -3;
        const result = ColourClash.makeMove(board_r_c, hand);
        if (result !== true) {
            throw new Error(`makeMove:darker colour cover lighter, not work`);
        }
    });


    it(`Given makeMove a value that is board[row][col] (user click),
        compare it with hand(player
        board[row][col](user previously select).
        Assume the board[row][col]already be occupied
        by darker blue(-3),
        Then assign a middle red (-3) to the same cell,
        The the resulting will be false this cell can
        not be over cover )`, function () {
        const board_r_c = -3;
        const hand = 2;
        const result = ColourClash.makeMove(board_r_c, hand);
        if (result !== false) {

            throw new Error(`makeMove:cell cannot be cover not work`);
        }
    });

});

/**
 * The function check whether player1 or 2 occupied
 * an entire row or col or diagonals.
 * @memberof ColourClash.test
 * @function checkWin_test
 * @throws if it don't return player1 or player2.
 */

describe("checkWin_test", function () {

    it(`Given a board where the red
        player has occupied an entire row,
        Then the function will return 'player1'.`, function () {
        const board = [[1, 1, 1], [0, 0, 0], [0, 0, 0]];
        const result = ColourClash.checkWin(board);

        if (result !== "player1") {
            throw new Error(`Checkwin-check row of red player not work`);
        }
    });

    it(`Given a board where the blue
          player has occupied an entire row.
          Then the function will return 'player2`, function () {
        const board = [[0, 0, 0], [-1, -1, -1], [0, 0, 0]];
        const result = ColourClash.checkWin(board);
        if (result !== "player2") {
            throw new Error(`Checkwin-check row of blue player not work`);
        }
    });

    it(`Given a board where the red
          player has occupied an entire col.
          Then the function will return 'player1'.`, function () {
        const board = [[1, 0, 0], [1, 0, 0], [1, 0, 0]];
        const result = ColourClash.checkWin(board);

        if (result !== "player1") {
            throw new Error(`Checkwin-check col of red player not work`);
        }
    });

    it(`Given a board where the blue
          player has occupied an entire col.
          Then the function will return 'player2'.`, function () {
        const board = [[0, 0, -1], [0, 0, -1], [0, 0, -1]];
        const result = ColourClash.checkWin(board);
        if (result !== "player2") {
            throw new Error(`Checkwin-check col of blue player not work`);
        }
    });

    it(`Given a board where the red
        player has occupied an entire diagonals.
        Then the function will return 'player1'.`, function () {
        const board = [[3, 0, 0], [0, 2, 0], [0, 0, 3]];
        const result = ColourClash.checkWin(board);
        if (result !== "player1") {
            throw new Error(`Checkwin-check diagonals of red player not work`);
        }
    });

    it(`Given a board where the blue
        player has occupied an entire diagonals.
        Then the function will return 'player2'..`, function () {
        const board = [[0, 0, -1], [0, -2, 0], [-2, 0, 0]];
        const result = ColourClash.checkWin(board);
        if (result !== "player2") {
            throw new Error(`Checkwin-check diagonals of blue player not work`);
        }
    });
});

/**
 * The function check whether it is a draw.
 * @memberof ColourClash.test
 * @function checkDraw_test
 * @throws if it don't return true.
 */
describe("checkDraw_b_t", function () {
    it(`Given a board that fill but neither player1 nor player2 win
        Then it means it is a draw, return true'.`, function () {
        const board = [[1, 2, -1], [-2, -3, 1], [3, -2, 3]];
        const result = ColourClash.checkDraw_b(board);

        if (result !== true) {
            throw new Error(`CheckDraw not work`);
        }

        it(`Given two player all have no token left
            If still no winner
            Then it will be draw.`, function () {
            const player1 = [[0, 0], [0, 0], [0, 0]];
            const player2 = [[0, 0], [0, 0], [0, 0]];
            const result_p = ColourClash.checkDraw_p(player1, player2);

            if (result_p !== true) {
                throw new Error(`CheckDraw not work`);
            }
        });
    });
});

/**
 * The function check who is the winner or it is a draw.
 * @memberof ColourClash.test
 * @function winner_test
 * @throws if it don't return P1 or P2 or D.
 */
describe("winner_test", function () {

    it(`Given a board which the red player win.
      Then the function will return 'p1' means
      player 1 is the winner.`, function () {
        const board = [[1, 1, 1], [0, 0, 0], [0, 0, 0]];
        const result = ColourClash.winner(board);
        if (result !== "P1") {
            throw new Error(`Cannot define player1 is the winner`);
        }
    });

    it(`Given a board which the blue player win.
      Then the function will return 'p2' means player 2
      is the winner.`, function () {
        const board = [[-1, -1, -1], [0, 0, 0], [0, 0, 0]];
        const result = ColourClash.winner(board);
        if (result !== "P2") {
            throw new Error(`Cannot define player2 is the winner`);
        }
    });

    it(`Given a board which it is a draw.
      Then the function will return 'D' means it's a draw.`, function () {
        const board = [[1, 2, -1], [-2, -3, 1], [3, -2, 3]];
        const result = ColourClash.winner(board);
        if (result !== "D") {
            throw new Error(`Cannot define it is draw.`);
        }
    });




});