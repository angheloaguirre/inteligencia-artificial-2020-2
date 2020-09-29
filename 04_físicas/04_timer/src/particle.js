class Particle {
  constructor(x, y) {
    this.position = new p5.Vector(x, y)
    this.velocity = p5.Vector.random2D().mult(random(5, 10))
    this.acceleration = new p5.Vector(0, 0)

    this.isDead = false
  }

  draw() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)

    fill('blue')
    if (this.isDead) fill('red')
    circle(this.position.x, this.position.y, 60)
  }
}
