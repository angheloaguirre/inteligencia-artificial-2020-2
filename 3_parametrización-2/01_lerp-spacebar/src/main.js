let t = 0
let dt = 1

let pStart
let pEnd
let position

function setup() {
  createCanvas(600, 600)
  pStart = new p5.Vector(100, 500)
  pEnd = new p5.Vector(500, 500)
}

function draw() {
  background('white')

  position = p5.Vector.lerp(pStart, pEnd, t)

  t += dt * deltaTime / 1000

  /// si se llegó al final del lerp
  if (t > 1) {
    // se invierte el punto inicial y el final
    let aux = pStart
    pStart = pEnd
    pEnd = aux
    t = 0
  }

  fill('red')
  circle(pStart.x, pStart.y, 15)

  fill('blue')
  circle(pEnd.x, pEnd.y, 15)

  fill('black')
  circle(position.x, position.y, 35)
}

function onSpacebarPressed() {
  // se invierte el punto inicial y el final
  let aux = pStart
  pStart = pEnd
  pEnd = aux

  // se invierte el valor de t
  t = 1 - t
}

function keyPressed() {
  if (key == ' ') {
    onSpacebarPressed()
  }
}
