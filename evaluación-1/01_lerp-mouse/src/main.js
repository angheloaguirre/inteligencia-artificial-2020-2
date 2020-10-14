// lerp
let t = 0
let dt = 1

let pStart
let pEnd
let position

let SPEED = 250

function setup() {
  createCanvas(600, 600)
  pStart = new p5.Vector(300, 300)
  pEnd = new p5.Vector(300, 300)
}

function draw() {
  background('white')

  position = p5.Vector.lerp(pStart, pEnd, t)
  dt = lerpDt(pStart, pEnd, SPEED)
  t += dt * deltaTime / 1000

  if (t > 1) {
    t = 1
  }

  fill('blue')
  circle(pEnd.x, pEnd.y, 15)

  fill('black')
  circle(position.x, position.y, 35)
}

function mousePressed(e) {
  t = 0 // restart
  pStart = position
  pEnd = createVector(mouseX, mouseY)
}

function lerpDt(pi, pf, speed) {
  let distance = dist(pi.x, pi.y, pf.x, pf.y)
  let dt = speed / distance
  return dt
}