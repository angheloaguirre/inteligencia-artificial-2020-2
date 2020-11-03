class GameState {}
GameState.MENU = 0
GameState.PLAYER_1 = 1
GameState.PLAYER_2 = 2
GameState.SCORE = 3

class Game {
  constructor() {
    this.player1 = new Player(100, 500, 150, 500)
    this.player2 = new Player(450, 500, 500, 500)

    this.state = GameState.PLAYER_1
  }

  draw() {
    switch (this.state) {
      case GameState.PLAYER_1: {
        this.player1.draw()
        this.player2.drawShapes()
        break
      }

      case GameState.PLAYER_2: {
        this.player2.draw()
        this.player1.drawShapes()
        break
      }
    }
  }

  switchPlayer() {
    switch (this.state) {
      case GameState.PLAYER_1: {
        this.state = GameState.PLAYER_2
        break
      }

      case GameState.PLAYER_2: {
        this.state = GameState.PLAYER_1
        break
      }
    }
  }
}
