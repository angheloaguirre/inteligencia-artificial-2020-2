let t = 0
let dt = 0.01

let positionInit
let positionEnd
let position

function setup() {
  createCanvas(600, 600)
  positionInit = new p5.Vector(100, 100)
  positionEnd = createVector(500, 500)
}

function draw() {
  background('white')

  position = p5.Vector.lerp(positionInit, positionEnd, t)

  fill('red')
  circle(position.x, position.y, 50)

  t += dt
  if (t >= 1) {
    t = 1
  }
}
