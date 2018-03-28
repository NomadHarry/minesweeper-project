// Minesweeper Project

// Board Layout
const board = [
		[' ',' ',' '],
		[' ',' ',' '],
		[' ',' ',' '],
		];

// Generate Board
const printBoard = board => {
	console.log('Current Board: ');
	console.log(board[0].join(' | '));
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));
};

// Print Board
console.log(printBoard(board));