class Game {
  private winPattern: number[];

  calculateWinner(squares: null[] | string[]) {
    const winOptions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winOptions.length; i++) {
      const [a, b, c] = winOptions[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        this.winPattern = [a, b, c];
        return squares[a];
      }
    }

    return null;
  }

  getWinPattern() {
    return this.winPattern;
  }
}

export default new Game();
