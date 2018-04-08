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
			
			if (board[randomRowIndex][randomColumnIndex] !== 'B') {
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++}
		};

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
	if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
		numberOfBombs++;
	} 
	};
});
	return numberOfBombs;
};


// Player Flip Tile

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
	if (playerBoard[rowIndex][columnIndex] !== ' ') {
		console.log('This tile has already been flipped!');
		return;
	}
	else if (bombBoard[rowIndex][columnIndex] === 'B') {
		playerBoard[rowIndex][columnIndex] = 'B';
	}
	else {
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
	}

};



// Print Game Board
const printBoard = board => {
	return board.map(row => row.join(' | ')).join('\n');
};

// Create Boards
let playerBoard = generatePlayerBoard(3,3);
let bombBoard = generateBombBoard(3,3,4);


// In Play Board
console.log('Player Board: ');
console.log(printBoard(playerBoard));
console.log('Bomb Board: ');
console.log(printBoard(bombBoard));
flipTile(playerBoard, bombBoard, 2, 1);
console.log('Updated Player Board: ');
console.log(printBoard(playerBoard));