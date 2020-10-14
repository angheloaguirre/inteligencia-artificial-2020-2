class Player {
  constructor() {
    this.position = createVector(300, 300)
    this.target = createVector(300, 300)
  }

  draw() {
    // fórmula para seguir
    // position = lerp(position, target, 0.1)
    this.position = p5.Vector.lerp(this.position, this.target, 0.1)

    // dibuja
    fill('blue')
    circle(this.position.x, this.position.y, 30)
  }

  mousePressed(e) {
    // al presionar el mouse, se cambia el target
    this.target = createVector(mouseX, mouseY)
  }
}
