class Particle {
  constructor(x, y) {
    this.position = new p5.Vector(x, y)
    this.velocity = p5.Vector.random2D().mult(random(10, 20))
    this.acceleration = new p5.Vector(0, 0)

    this.isDead = false
    this.timer = 0
  }

  draw() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)

    this.timer += deltaTime / 1000
    if (this.timer > 0.2) {
      this.isDead = true
    }

    fill('blue')
    // if (this.isDead) fill('red')
    circle(this.position.x, this.position.y, 40)
  }
}
