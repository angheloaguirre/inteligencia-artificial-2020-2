class Npc {
  constructor() {
    this.position = createVector(300, 300)
    
    this.isPaused = false
    
    // estados
    this.PAUSED = 0
    this.UNPAUSED = 1

    // variable estado inicializada
    this.state = this.PAUSED
  }

  draw() {
    switch (this.state) {
      case this.PAUSED: {
        this.drawBall()
        break
      }

      case this.UNPAUSED: {
        let mousePosition = createVector(mouseX, mouseY)
        this.position = p5.Vector.lerp(this.position, mousePosition, 0.1)
        this.drawBall()
        break
      }
    }
  }

  drawBall() {
    fill('red')
    circle(this.position.x, this.position.y, 40)
  }

  spacebarPressed() {
    if (this.state == this.PAUSED) {
      this.state = this.UNPAUSED
    } else {
      this.state = this.PAUSED
    }
  }
}
