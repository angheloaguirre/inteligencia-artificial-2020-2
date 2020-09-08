class Enemy {
  constructor() {
    this.x = 0
    this.y = 500
    this.orbit = new Orbit(this)
  }

  draw() {
    this.x += 1
    fill('orange')
    circle(this.x, this.y, 100)

    this.orbit.draw()
  }
}