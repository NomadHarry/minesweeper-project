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
			if (randomRowIndex && randomColumnIndex !== 'B') {
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;}
		}

		return board;
};

// Neighbour Bombs
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
	const neighborOffsets = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
	const numberOfRows = bombBoard.length;
	const numberOfColumns = bombBoard[0].length;
	let numberOfBombs = 0;

neighborOffsets.forEach(offset => {
	const neighborRowIndex = rowIndex + offset[0];
	const neighborColumnIndex = columnIndex + offset[1];
	if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 &&
		neighborColumnIndex < numberOfColumns) {
	if (bombBoard == 'B') {
		numberOfBombs++;
	} 
	}
});
	return numberOfBombs;
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