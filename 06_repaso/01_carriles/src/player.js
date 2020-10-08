class PlayerState {}
PlayerState.LEFT = 0
PlayerState.CENTER = 1
PlayerState.RIGHT = 2
PlayerState.LEFT_TO_CENTER = 3
PlayerState.CENTER_TO_RIGHT = 4
PlayerState.CENTER_TO_LEFT = 5
PlayerState.RIGHT_CENTER = 6

class Player {
  constructor() {
    this.position = new p5.Vector(240, 550)
    this.state = PlayerState.CENTER
    this.tX = 0
    this.dtX = 0.1
  }

  draw() {
    switch (this.state) {
      case PlayerState.LEFT: {
        this.position.x = 100
        fill('blue')
        circle(this.position.x, this.position.y, 40)
        break
      }

      case PlayerState.CENTER: {
        this.position.x = 240
        fill('blue')
        circle(this.position.x, this.position.y, 40)
        break
      }

      case PlayerState.RIGHT: {
        this.position.x = 380
        fill('blue')
        circle(this.position.x, this.position.y, 40)
        break
      }

      case PlayerState.LEFT_TO_CENTER: {
        this.position.x = lerp(100, 240, this.easeOut(this.tX))

        this.tX += this.dtX
        // si termina la animación
        if (this.tX > 1) {
          this.state = PlayerState.CENTER
          this.tX = 0
        }

        fill('blue')
        circle(this.position.x, this.position.y, 40)
        break
      }

      case PlayerState.CENTER_TO_RIGHT: {
        this.position.x = lerp(240, 380, this.easeOut(this.tX))

        this.tX += this.dtX
        // si termina la animación
        if (this.tX > 1) {
          this.state = PlayerState.RIGHT
          this.tX = 0
        }

        fill('blue')
        circle(this.position.x, this.position.y, 40)
        break
      }

      case PlayerState.RIGHT_CENTER: {
        this.position.x = lerp(380, 240, this.easeOut(this.tX))

        this.tX += this.dtX
        // si termina la animación
        if (this.tX > 1) {
          this.state = PlayerState.CENTER
          this.tX = 0
        }

        fill('blue')
        circle(this.position.x, this.position.y, 40)
        break
      }

      case PlayerState.CENTER_TO_LEFT: {
        this.position.x = lerp(240, 100, this.easeOut(this.tX))

        this.tX += this.dtX
        // si termina la animación
        if (this.tX > 1) {
          this.state = PlayerState.LEFT
          this.tX = 0
        }

        fill('blue')
        circle(this.position.x, this.position.y, 40)
        break
      }
    }
  }

  keyPressed(event) {
    switch (this.state) {
      case PlayerState.LEFT: {
        // derecha
        if (event.keyCode == 39) {
          this.state = PlayerState.LEFT_TO_CENTER
        }
        break
      }

      case PlayerState.CENTER: {
        // izquierda
        if (event.keyCode == 37) {
          this.state = PlayerState.CENTER_TO_LEFT
        }

        // derecha
        if (event.keyCode == 39) {
          this.state = PlayerState.CENTER_TO_RIGHT
        }
        break
      }

      case PlayerState.RIGHT: {
        // izquierda
        if (event.keyCode == 37) {
          this.state = PlayerState.RIGHT_CENTER
        }
        break
      }
    }
  }

  easeOut(t) {
    return 1 - pow(1 - t, 3)
  }
}
