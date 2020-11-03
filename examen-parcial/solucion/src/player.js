class Player {
  constructor(psX, psY, peX, peY) {
    this.positionStart = createVector(psX, psY)
    this.positionEnd = createVector(peX, peY)
    this.position = this.positionStart
    
    // lerp
    this.tPosition = 0
    this.dtPosition = 0.02
    
    // bala
    this.head = createVector()
    this.direction = createVector()
    this.bullet = null

    this.calculateHead()
  }

  draw() {
    this.position = p5.Vector.lerp(this.positionStart, this.positionEnd, this.tPosition)

    // si presiona izquierda
    if (keyIsDown(37)) {
      console.log('izquierda')
      this.tPosition -= this.dtPosition
      if (this.tPosition < 0) this.tPosition = 0
    }
    
    // si presiona derecha
    if (keyIsDown(39)) {
      console.log('derecha')
      this.tPosition += this.dtPosition
      if (this.tPosition > 1) this.tPosition = 1
    }

    // si presiona barra espaciadora
    if (keyIsDown(32)) {
      // si el bullet no existe, se dispara
      if (this.bullet == null) {
        this.bullet = new Bullet(this.head, this.direction)
        console.log('disparar')
      }
    }

    if (this.bullet != null) {
      this.bullet.draw()

      if (this.bullet.position.y > 600) {
        console.log('switch player')
        this.bullet = null
        Global.game.switchPlayer()
      }
    }

    this.calculateHead()
    this.drawShapes()
  }

  calculateHead() {
    let mousePosition = createVector(mouseX, mouseY)
    this.direction = mousePosition.sub(this.position).normalize()
    this.head = this.position.copy().add(this.direction.mult(50))
  }

  drawShapes() {
    // piso
    line(this.positionStart.x, this.positionStart.y, this.positionEnd.x, this.positionEnd.y)
    
    // tanque
    fill('yellow')
    circle(this.position.x, this.positionEnd.y, 30)

    // cañón
    strokeWeight(5)
    stroke('black')
    line(this.position.x, this.position.y, this.head.x, this.head.y)
  }
}
