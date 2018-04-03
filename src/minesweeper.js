// Minesweeper Project

// Player Board Generated
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	const board = [];
		
		for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
			let row = [];
			for (let columnNumber = 0; columnNumber < numberOfColumns; columnNumber++) {
				row.push(' ');
			};
			board.push(row);
		};
		return board;
};


// Bomb Board Generated
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	const board = [];
		
		for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
			let row = [];
			for (let columnNumber = 0; columnNumber < numberOfColumns; columnNumber++) {
				row.push(null);
			};
			board.push(row);
		};
	let numberOfBombsPlaced = 0;
		
		while (numberOfBombsPlaced < numberOfBombs) {
			let randomRowIndex = Math.floor(Math.random() * numberOfRows);
			let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;
			// Fix Duplicate Bombs Later
		}

		return board;
};


// Print Game Board
const printBoard = board => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
};

// Create Boards
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);


// In Play Board
console.log('Player Board: ');
console.log(printBoard(playerBoard));
console.log('Bomb Board: ');
console.log(printBoard(bombBoard));