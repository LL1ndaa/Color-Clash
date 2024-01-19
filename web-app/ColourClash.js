/**
 * ColourClash.js is a module to model and play "Colour Clash".
 * @namespace ColourClash
 * @author Linda
 * @version 2023
 */

/**
 * Colour Clash is an original game that has two players:
 * BlazeBattler (red) and CobaltKnight (blue).
 * Each player has 6 game tokens: two light, two medium, and two dark.
 * The medium colour can cover the light colour,
 * and the dark colour can cover the light colour.
 * The first player to get 3 tokens in a row (column or diagonally) win.
 * When all 9 squares are full or both players don't have any tokens left--draw.
 * @namespace ColourClash
 */


const ColourClash = Object.create(null);


/**
 * Create a new empty game board filled with 0.
 * Optionally with a specified width and height,
 * otherwise returns a standard 3 wide, 3 high board.
 * @memberof ColourClash
 * @function empty_board
 * @param {number} [width = 3] The width of the new board.
 * @param {number} [height = 3] The height of the new board.
 * @returns {number[][]} An empty game board for staring a game.
 */

ColourClash.empty_board = function (width = 3, height = 3) {

    return Array.from({length: width}, () => new Array(height).fill(0));
};


/**
 * Create an array for player1(red).
 * Player1 has 6 tokens for light red, 2 for middle red, 3 for dark red.
 * In player1 they are all positive.
 * @memberof ColourClash
 * @function player1
 * @returns {number[][]}
 */

ColourClash.player1 = function () {
    return [[1, 1], [2, 2], [3, 3]];

};


/**
 * Create an array for player1(red).
 * Player2 has 6 tokens for light blue, 2 for middle blue, 3 for dark blue
 * In player1 they are all positive.
 * Get the player 2 positions.
 * @memberof ColourClash
 * @function player2
 * @returns {number[][]}
 */

ColourClash.player2 = function () {
    return [[-1, -1], [-2, -2], [-3, -3]];

};


/**
 * Initial the current player to be 0.
 * @memberof ColourClash
 * @function currentPlayer
 * ...
 */

ColourClash.currentPlayer = function () {
    let currentPlayer = "0";
    return currentPlayer;
};


/**
 * Check whether can make move on the game board.
 * If the abs of boardrc samller than hand,
 * means the current colour is lighter than the token.
 * So it can be covered.
 * @memberof ColourClash
 * @function makeMove
 * @param {number} boardrc Value of the grid clicked by user in board.
 * @param {number} hand Value of the game token player selected
 * @returns {boolean} True if the can move, false otherwise.
 */

ColourClash.makeMove = function (boardrc, hand) {
    if (boardrc === 0) {
        return true;
    } else if (Math.abs(boardrc) < Math.abs(hand)) {
        return true;
    } else {
        return false;
    }
};


/**
 * Check the winner of the game.
 * @memberof ColourClash
 * @function winner
 * @param {number} board The game board.
 * @param {number[][]} p1 Player 1.
 * @param {number[][]} p2 Player 2 .
 * @returns {string} Winner:'P1' for Player 1, 'P2' for Player 2, 'D' for draw).
 */

ColourClash.winner = function (board, p1, p2) {

// console.log(ColourClash.checkWin(board));
    let result = "";

    if (ColourClash.checkWin(board) === "player1") {

      // console.log('Player1 wins!');
        result = "P1";

    } else if (ColourClash.checkWin(board) === "player2") {

      // console.log('Player2 wins!');
        result = "P2";

    } else if (
        ColourClash.checkDraw_b(board) ===
        true || ColourClash.checkDraw_p(p1, p2) ===
        true
    ) {

      // console.log('Draw');
        result = "D";
    }
    return result;

};



/**
 * Check if there is a winner on the game board.
 * @memberof ColourClash
 * @function checkWin
 * @param {number[][]} board The game board.
 * @returns {string|null}
 */

ColourClash.checkWin=function (board) {
    // Check rows-player1(red)
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] >0 && board[row][1]>0 && board[row][2] >0
      ) {
        return "player1";
      }
    }

    // Check columns- player1(red)
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] >0 && board[1][col]>0 && board[2][col]>0
      ) {
        return "player1";
      }
    }

    // Check diagonals- player1(red)
    if (
      board[0][0] >0 && board[1][1] >0 && board[2][2]>0
    ) {
      return "player1";
    }
    if (
      board[0][2] >0 && board[1][1] >0 && board[2][0]>0
    ) {
      return "player1";
    }



     // Check rows- player2(col)
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] <0 && board[row][1]<0 && board[row][2] <0
      ) {
        return "player2";
      }
    }

    // Check columns- player2(col)
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] <0 && board[1][col]<0 && board[2][col]<0
      ) {
        return "player2";
      }
    }

    // Check diagonals- player2
    if (
      board[0][0] <0 && board[1][1] <0 && board[2][2]<0
    ) {
      return "player2";
    }
    if (
      board[0][2] <0 && board[1][1] <0 && board[2][0]<0
    ) {
      return "player2";
    }

    return null;
  }

 /**
 * If the board is full be no winner,
 * It is a draw.
 * @memberof ColourClash
 * @function checkDraw_b
 * @param {number[][]} board
 * @returns {boolean} True if the game board is a draw, false otherwise.
 */
ColourClash.checkDraw_b= function(board) {
  let boardfill = 0;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] !== 0) {
        boardfill++;
      }
    }
  }
  // console.log(boardfill);
    if (boardfill==9){
      return true;
      // console.log(100)
    }}


/**
 * Check if it is a draw.
 * If both players have no token left,
 * It will be draw.
 * Normally player1 all positive, player2 all negative.
 * The only condition they equal is when no token left and they all be 0.
 * @memberof ColourClash
 * @function checkDraw_p
 * @param {number[][]} p1 Player .
 * @param {number[][]} p2 Player .
 * @returns {boolean} True if the game board is a draw, false otherwise.
 */

ColourClash.checkDraw_p = function (p1, p2) {

      // console.log(p1)
      // console.log(p2)
    if (JSON.stringify(p1) === JSON.stringify(p2)) {
      // return true;
        console.log(1000);
        return true;
    }
};

export default Object.freeze(ColourClash);



// Function to reset the game
// ColourClash.resetGame= function(width = 3, height = 3) {

//   return Array.from({ length: width }, () => Array(height).fill(0));

//     }

    // const currentPlayer = player1;



  // if ((board=== 0)||((board!==0)&&(Math.abs(board) < Math.abs(hand)))) {
    // Set the cell with the current player's symbol
    // if ((board[row][col] === 0)||((board[row][col]!=0)&&
    //(Number.isInteger(hand/board)))) {


    // let player1 = [[2, 2],[18, 18], [72,72]];
  // let player2 = [[-3, -3],[-12,-12], [-108,-108]];
  // ColourClash.player1=player1;
  // ColourClash.currentplayer = ColourClash.player1;
// ColourClash.currentplayer= function(player){

// }


// ColourClash.makeMove= function (currentplayer, empty_board, row=0, col=0) {
// if ((empty_board[row][col] === 0)||((empty_board[row][col]!==0)
// &&(Math.abs(board[row][col]) < Math.abs(currentplayer[row][col])))) {
// Set the cell with the current player's symbol
// empty_board[row][col] = currentplayer[row][col];
//**how to call the number I'm not sure
// currentplayer[row][col]=0;//make it blank
// ColourClash.row=0;
// ColourClash.col=0;
// Function to check for a winning condition


// ColourClash.winner=function(board,currentPlayer){

//   if (ColourClash.checkWin(board) === 'player1') {
//     return 'Player1 wins!'
//     console.log('Player1 wins!');
//     // Reset the game
//     resetGame();
//   } else if (ColourClash.checkWin(board) === 'player2') {
//       console.log('Player2 wins!');
//     // Reset the game
//       resetGame();
//   } else if (ColourClash.checkDraw(board))
//       {console.log('It\'s a draw!');
//       // Reset the game
//       resetGame();
//   }else{
//     // currentplayer = (currentplayer === player1) ? player2 : player1;
//     // renderBoard();
//   }
//   // renderBoard();//* I don't know whether it will be using
// }
    //  ColourClash.checkWin(board);
// console.log(ColourClash.checkWin(board))
    // console.log('Player1 wins!');
    // Reset the game
    //  ColourClash.resetGame();
      // console.log('Player2 wins!');
    // Reset the game
      // ColourClash.resetGame();
        // console.log('Player2 wins!');
    // Reset the game
      // ColourClash.resetGame();
//   console.log( "D")      // Reset the game
      // ColourClash.resetGame();
    // currentplayer = (currentplayer === player1) ? player2 : player1;
    // renderBoard();
