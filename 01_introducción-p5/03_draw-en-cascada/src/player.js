class Player {
  constructor() {
    this.x = 0
  }

  draw() {
    this.x += 3
    fill('yellow')
    circle(this.x, 300, 100)
  }
}