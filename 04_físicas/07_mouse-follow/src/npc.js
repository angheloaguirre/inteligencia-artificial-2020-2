class Npc {
  constructor() {
    this.position = createVector(300, 300)
    this.velocity = createVector()
    this.SPEED = 3
  }

  draw() {
    // crea el punto (mx, my)
    let mousePosition = createVector(mouseX, mouseY)

    // calcula la dirección unitaria
    // (M - P).normalize()
    let direction = mousePosition.sub(this.position).normalize()

    // calcula la velocidad = direction * magnitud
    this.velocity = direction.mult(this.SPEED)

    // aplica la velocidad
    this.position.add(this.velocity)

    fill('red')
    circle(this.position.x, this.position.y, 40)
  }
}