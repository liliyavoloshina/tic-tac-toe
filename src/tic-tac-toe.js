class TicTacToe {
  constructor() {
    this.currentPlayer = 'x'
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

  getCurrentPlayerSymbol() {
    console.log('get current player symb')
    return this.currentPlayer
  }

  nextTurn(rowIndex, columnIndex) {
    this.matrix[rowIndex][columnIndex] = this.currentPlayer
    // console.log(this.marks)

    if (this.currentPlayer === 'x') {
      this.currentPlayer ='o'
    } else {
      this.currentPlayer = 'x'
    }
  }

  isFinished() {}

  getWinner() {}

  noMoreTurns() {}

  isDraw() {}

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex]
  }
}

module.exports = TicTacToe
