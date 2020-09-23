class Particle {
  constructor() {
    // propiedades necesarias para generar físicas
    this.position = new p5.Vector(300, 300)
    this.velocity = new p5.Vector(10, -10)
    this.acceleration = new p5.Vector(0, 1)
  }

  draw() {
    // aceleración modifica velocidad
    this.velocity.add(this.acceleration)

    // velocidad modifica posoción
    this.position.add(this.velocity)
    
    // dibuja
    fill('blue')
    circle(this.position.x, this.position.y, 30)
  }
}
