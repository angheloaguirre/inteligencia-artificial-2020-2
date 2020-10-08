class Obstacle {
  constructor(x) {
    this.position = new p5.Vector(x, 0)
    this.speed = 200
    this.isDead = false
  }

  draw() {
    this.position.y += this.speed * deltaTime / 1000

    // si se sale de la pantalla
    if (this.position.y > 650) {
      this.isDead = true
      Global.score++
    }

    // si colisiona con el player, termina el juego
    if (dist(this.position.x, this.position.y, Global.player.position.x, Global.player.position.y) < 10) {
      Global.game.endLevel()
    }

    noStroke()
    fill('red')
    circle(this.position.x, this.position.y, 30)
  }
}
