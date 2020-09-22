// lerp
let t = 0
let dt = 1

let pStart
let pEnd
let position

function setup() {
  createCanvas(600, 600)
  pStart = new p5.Vector(300, 300)
  pEnd = new p5.Vector(300, 300)
}

function draw() {
  background('white')

  position = p5.Vector.lerp(pStart, pEnd, elastic(t))
  t += dt * deltaTime / 1000

  if (t > 1) {
    nextPoint()
  }

  // dibuja
  for (let i = 1; i < 6; i++) {
    line(i * 100, 0, i * 100, 600)
    line(0, i * 100, 600, i * 100)
  }

  fill('blue')
  circle(pEnd.x, pEnd.y, 15)
  fill('black')
  circle(position.x, position.y, 35)
}

function nextPoint() {
  let x = 100 * parseInt(random(1, 6))
  let y = 100 * parseInt(random(1, 6))
  pStart = pEnd
  pEnd = new p5.Vector(x, y)
  t = 0
}

function lerpDt(pi, pf, speed) {
  let distance = dist(pi.x, pi.y, pf.x, pf.y)
  let dt = speed / distance
  return dt
}

// elastic ---> efecto resorte
function elastic(t) {
  if (t == 0) return 0
  if (t == 1) return 1
  return pow(2, -10 * t) * sin((10 * t - 0.75) * 0.666666 * PI) + 1
}