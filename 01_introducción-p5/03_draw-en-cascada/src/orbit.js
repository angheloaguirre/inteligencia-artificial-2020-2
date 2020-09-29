class Orbit {
  constructor(parent) {
    this.parent = parent
    this.offsetX = 0
    this.offsetY = 0
  }

  draw() {
    fill('red')
    let time = 3 * millis() / 1000
    
    this.offsetX = this.parent.x + 80 * Math.cos(time)
    this.offsetY = this.parent.y + 80 * Math.sin(time)

    circle(this.offsetX, this.offsetY, 30)
  }
}
