// clase estática que nos servirá como enumerador
class NpcState {
  static NORMAL = 0
  static SHIELD_APPEARING = 2
  static SHIELD_DISAPPEARING = 3
  static SHIELD = 1
}

class Npc {
  constructor() {
    this.position = createVector(300, 300)

    // variable estado inicializada
    this.state = NpcState.NORMAL

    this.MAX_RADIUS = 80
    this.radius = 0

    // variables para el lerping
    this.tRadius = 0
    this.dtRadius = 0.05
  }

  draw() {
    switch (this.state) {
      case NpcState.NORMAL: {
        let mousePosition = createVector(mouseX, mouseY)
        this.position = p5.Vector.lerp(this.position, mousePosition, 0.1)
        this.drawBall()
        break
      }

      case NpcState.SHIELD: {
        let mousePosition = createVector(mouseX, mouseY)
        this.position = p5.Vector.lerp(this.position, mousePosition, 0.1)
        this.drawBall()
        this.drawShield()
        break
      }

      case NpcState.SHIELD_APPEARING: {
        let mousePosition = createVector(mouseX, mouseY)
        this.position = p5.Vector.lerp(this.position, mousePosition, 0.1)
        this.drawBall()

        // dibujar el escudo con lerp
        this.radius = lerp(0, this.MAX_RADIUS, this.tRadius)
        this.tRadius += this.dtRadius

        if (this.tRadius > 1) {
          this.state = NpcState.SHIELD
          this.tRadius = 0
        }

        noFill()
        stroke('gold')
        strokeWeight(10)
        circle(this.position.x, this.position.y, this.radius)
        break
      }

      case NpcState.SHIELD_DISAPPEARING: {
        let mousePosition = createVector(mouseX, mouseY)
        this.position = p5.Vector.lerp(this.position, mousePosition, 0.1)
        this.drawBall()

        // dibujar el escudo con lerp
        this.radius = lerp(this.MAX_RADIUS, 0, this.tRadius)
        this.tRadius += this.dtRadius

        if (this.tRadius > 1) {
          this.state = NpcState.NORMAL
          this.tRadius = 0
        }

        noFill()
        stroke('gold')
        strokeWeight(10)
        circle(this.position.x, this.position.y, this.radius)

        break
      }
    }
  }

  drawBall() {
    fill('red')
    noStroke()
    circle(this.position.x, this.position.y, 40)
  }

  drawShield() {
    noFill()
    stroke('gold')
    strokeWeight(10)
    circle(this.position.x, this.position.y, 80)
  }

  spacebarPressed() {
    switch (this.state) {
      case NpcState.NORMAL: {
        this.state = NpcState.SHIELD_APPEARING
        break
      }

      case NpcState.SHIELD: {
        this.state = NpcState.SHIELD_DISAPPEARING
        break
      }

      case NpcState.SHIELD_APPEARING: {
        break
      }

      case NpcState.SHIELD_DISAPPEARING: {
        break
      }
    }
  }
}
