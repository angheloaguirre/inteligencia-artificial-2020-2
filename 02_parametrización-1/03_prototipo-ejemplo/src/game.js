class Game {
  constructor() {
    // límites de las barras de tope
    this.topLimit = 100
    this.bottomLimit = 500
    this.direction = 'down'

    // puntos aleatorios inicial y final de movimiento
    this.positionInit = new p5.Vector(random(100, 500), this.topLimit)
    this.positionEnd = new p5.Vector(random(100, 500), this.bottomLimit)

    // posición del circulo en movimiento
    this.circlePosition = new p5.Vector()

    // variables para hacer lerping
    this.t = 0
    this.dt = 0.015
  }

  draw() {
    // dibuja los topes
    line(100, this.topLimit, 500, this.topLimit)
    line(100, this.bottomLimit, 500, this.bottomLimit)

    // calcula la posición del círculo
    this.circlePosition = p5.Vector.lerp(this.positionInit, this.positionEnd, this.t)

    this.t += this.dt

    // si ya terminó el lerp
    if (this.t > 1) {
      switch (this.direction) {
        case 'up': {
          // el punto inicial es el antiguo punto final
          this.positionInit = this.positionEnd

          // el nuevo punto final se randomiza en bottom
          this.positionEnd = new p5.Vector(random(100, 500), this.bottomLimit)

          // se cambia de estado
          this.direction = 'down'

          // se resetea la animación
          this.t = 0

          break
        }

        case 'down': {
          // el punto inicial es el antiguo punto final
          this.positionInit = this.positionEnd

          // el nuevo punto final se randomiza en top
          this.positionEnd = new p5.Vector(random(100, 500), this.topLimit)

          // se cambia de estado
          this.direction = 'up'

          // se resetea la animación
          this.t = 0

          break
        }
      }
    }

    // se dibujan los objetos
    fill('red')
    circle(this.positionInit.x, this.positionInit.y, 15)
    circle(this.positionEnd.x, this.positionEnd.y, 15)
    circle(this.circlePosition.x, this.circlePosition.y, 30)
  }

  changeDirection() {
    // se intercambian los extremos del lerp
    let aux = this.positionInit
    this.positionInit = this.positionEnd
    this.positionEnd = aux

    // y se invierte el parámetro t para ir hacia el otro lado
    this.t = 1 - this.t

    // también se debe cambiar la dirección
    if (this.direction == 'up') {
      this.direction = 'down'
    } else {
      this.direction = 'up'
    }
  }
}
