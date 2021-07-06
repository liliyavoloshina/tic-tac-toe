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
    return this.currentPlayer
  }

  nextTurn(rowIndex, columnIndex) {
    // draw symbol in clicked ceil
    this.matrix[rowIndex][columnIndex] = this.currentPlayer

    // change symbol to opposite
    if (this.currentPlayer === 'x') {
      this.currentPlayer = 'o'
    } else {
      this.currentPlayer = 'x'
    }

    console.log(rowIndex, columnIndex)
  }

  isFinished() {}

  getWinner() {
    // check first row
    if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][1]  === this.matrix[0][2]) {
      return this.matrix[0][0]
    } else
    // check second row
    if (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][1]  === this.matrix[1][2]) {
      return this.matrix[1][0]
    } else
    // check third row
    if (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][1]  === this.matrix[2][2]) {
      return this.matrix[2][0]
    } else
    // check first column
    if (this.matrix[0][0] === this.matrix[1][0] && this.matrix[1][0]  === this.matrix[2][0]) {
      return this.matrix[0][0]
    } else
    // check second column
    if (this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1]  === this.matrix[2][1]) {
      return this.matrix[0][1]
    } else
    // check third column
    if (this.matrix[0][2] === this.matrix[1][2] && this.matrix[1][2]  === this.matrix[2][2]) {
      return this.matrix[0][2]
    } else
    // check left-right diagonal
    if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1]  === this.matrix[2][2]) {
      return this.matrix[0][0]
    } else
    // check right-left diagonal
    if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1]  === this.matrix[2][0]) {
      return this.matrix[0][2]
    } else {
      return null
    }
  }

  noMoreTurns() {}

  isDraw() {}

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex]
  }
}

module.exports = TicTacToe
