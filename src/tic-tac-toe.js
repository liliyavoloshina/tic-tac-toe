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

  isFinished() {
    if (this.getWinner() || this.isDraw()) {
      console.log('finished')
      return true
    }
  }

  getWinner() {
    // check first row
    if (
      this.matrix[0][0] === this.matrix[0][1] &&
      this.matrix[0][1] === this.matrix[0][2]
    ) {
      return this.matrix[0][0]
    }
    // check second row
    else if (
      this.matrix[1][0] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[1][2]
    ) {
      return this.matrix[1][0]
    }
    // check third row
    else if (
      this.matrix[2][0] === this.matrix[2][1] &&
      this.matrix[2][1] === this.matrix[2][2]
    ) {
      return this.matrix[2][0]
    }
    // check first column
    else if (
      this.matrix[0][0] === this.matrix[1][0] &&
      this.matrix[1][0] === this.matrix[2][0]
    ) {
      return this.matrix[0][0]
    }
    // check second column
    else if (
      this.matrix[0][1] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[2][1]
    ) {
      return this.matrix[0][1]
    }
    // check third column
    else if (
      this.matrix[0][2] === this.matrix[1][2] &&
      this.matrix[1][2] === this.matrix[2][2]
    ) {
      return this.matrix[0][2]
    }
    // check left-right diagonal
    else if (
      this.matrix[0][0] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[2][2]
    ) {
      return this.matrix[0][0]
    }
    // check right-left diagonal
    else if (
      this.matrix[0][2] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[2][0]
    ) {
      return this.matrix[0][2]
    } else {
      return null
    }
  }

  noMoreTurns() {
    // if no 'null' cell return true
    return this.matrix.every(cell => !cell.includes(null))
  }

  isDraw() {
    // if there is no turns and no winner return true
    if (this.noMoreTurns() && !this.getWinner()) {
      return true
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex]
  }
}

module.exports = TicTacToe
