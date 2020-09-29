class Particle {
  constructor(x, y) {
    this.position = new p5.Vector(x, y)
    // velocidad aleatoria
    this.velocity = p5.Vector.random2D().mult(random(5, 10))
    this.acceleration = new p5.Vector(0, 1)
    
    // variable necesaria para hacer pooling
    this.isDead = false
  }

  draw() {
    // físicas
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)

    // condición de muerte
    if (this.position.x < 0 || 
        this.position.x > 600 || 
        this.position.y < 0 || 
        this.position.y > 600) {
      this.isDead = true
    }

    // dibujo
    fill('blue')
    if (this.isDead) fill('red')
    circle(this.position.x, this.position.y, 30)
  }
}
