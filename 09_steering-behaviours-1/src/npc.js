class Npc {
  constructor(x, y) {
    this.position = createVector(x, y)
    this.velocity = createVector()

    this.maxSpeed = 2
    this.maxSteer = 0.5
    this.range = 100
  }

  draw() {
    // vector deseado calculado dependiendo del objetivo
    let desired = createVector()
    let distance = dist(Global.player.position.x, Global.player.position.y, this.position.x, this.position.y)

    if (distance < this.range) {
      // desired = (Global.player.tranform.position - this.position).Normalized() * this.maxSpeed
      desired = Global.player.position.copy().sub(this.position).normalize().mult(this.maxSpeed)
    }


    // se calcula el vector steer
    let steer = desired.sub(this.velocity).limit(this.maxSteer)

    // fórmulas de la física
    this.velocity.add(steer)
    this.position.add(this.velocity)

    // se dibuja
    fill('green')
    noStroke()
    circle(this.position.x, this.position.y, 30)    

    noFill()
    stroke('gray')
    circle(this.position.x, this.position.y, this.range * 2)
  }
}