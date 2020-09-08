class Game {
  constructor() {
    this.player = new Player()
    this.enemy = new Enemy()
  }

  draw() {
    background('black')
    this.player.draw()
    this.enemy.draw()
  }
}