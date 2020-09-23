class Particle {
  constructor(x, y) {
    // se calcula el origen
    let origin = new p5.Vector(300, 300)

    // se calcula la posición del mouse
    let mousePosition = new p5.Vector(x, y)

    // se calcula el vector que va desde el origen hasta la posición del mouse
    let v = mousePosition.sub(origin)

    // se setean los valores iniciales
    this.position = new p5.Vector(300, 300)
    this.velocity = v.mult(0.1)
    this.acceleration = new p5.Vector(0, 1)
  }

  draw() {
    // se animan las físicas
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    
    fill('blue')
    circle(this.position.x, this.position.y, 30)

    line(300, 300, mouseX, mouseY)
  }
}
