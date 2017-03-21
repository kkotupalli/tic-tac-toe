class TicTacToe {

   constructor() {

       this.currentPlayerSymbol = 'x';
       this.ticTacMatrix = TicTacToe.matrixCreation(3, 3, null);
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        let currentVal = this.getFieldValue(rowIndex, columnIndex);
        if (currentVal != null) {
            return;
        }
        this.ticTacMatrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.changePlayer();

    }

    isFinished() {
        
    }

    getWinner() {
        

    }

    noMoreTurns() {
        
    }

    isDraw() {
       
    }

    getFieldValue(rowIndex, colIndex) {
        return this.ticTacMatrix[rowIndex][colIndex];
    }
    changePlayer() {
        this.currentPlayerSymbol = this.getCurrentPlayerSymbol() === 'x' ? 'o' : 'x';
    }
    addGridScore(row, col, point) {
        
    }

    static matrixCreation(rows, columns, initialValue) {
        let rowArray = [];
        for (let rowVal = 0; rowVal < rows; rowVal++) {
            let columnArray = [];
            for (let colVal = 0; colVal < columns; colVal++) {
                columnArray[colVal] = initialValue;
            }
            rowArray[rowVal] = columnArray;
        }
        return rowArray;
    }
}

module.exports = TicTacToe;
