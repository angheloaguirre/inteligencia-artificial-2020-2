class Particle {
  constructor(x, y) {
    this.position = createVector(x, y)

    // velocidad aleatoria
    this.speed = random(3, 10)
    this.speed = p5.Vector.random2D().mult(this.speed)

    // aceleración tipo gravedad
    this.acceleration = createVector(0, 0.5)

    // pooling
    this.isDead = false
  }

  draw() {
    // fórmula de la física
    this.speed.add(this.acceleration)
    this.position.add(this.speed)

    // condición de muerte: salir de la pantalla
    if (this.position.x < 0 || this.position.x > 600 || this.position.y < 0 || this.position.y > 600) {
      this.isDead = true
    }

    // dibuja
    fill('black')
    circle(this.position.x, this.position.y, 3)
  }
}
