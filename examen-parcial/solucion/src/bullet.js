class Bullet {
  constructor(head, direction) {
    this.position = head
    this.velocity = direction.mult(1)
    this.gravity = createVector(0, 5)
  }

  draw() {
    this.velocity.add(this.gravity)
    this.position.add(this.velocity)

    fill('red')
    circle(this.position.x, this.position.y, 15)
  }
}