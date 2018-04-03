// Minesweeper Project

// Player Board Generated
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
		
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
	let board = [];
		
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
			board = [randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;
			// Fix Duplicate Bombs Later
		}

		return board;
};

// In Play Board
console.log(generatePlayerBoard(2,2));