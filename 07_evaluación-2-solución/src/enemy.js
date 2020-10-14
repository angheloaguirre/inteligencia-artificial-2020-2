class Enemy {
  constructor() {
    this.position = createVector()
  }

  draw() {
    // fórmula para seguir
    // position = lerp(position, target, 0.1)
    this.position = p5.Vector.lerp(this.position, Global.player.position, 0.05)

    // si colisiona con el player, termina el juego
    if (dist(this.position.x, this.position.y, Global.player.position.x, Global.player.position.y) < 20) {
      Global.game.endGame()
    }

    // dibuja
    fill('red')
    circle(this.position.x, this.position.y, 30)
  }
}