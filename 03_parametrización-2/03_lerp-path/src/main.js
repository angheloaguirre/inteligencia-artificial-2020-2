let points = []
let index = -1

// lerping
let SPEED = 100
let t
let position

function setup() {
  createCanvas(600, 600)
  textAlign(CENTER, CENTER)

  // se definen los puntos del path
  points.push(new p5.Vector(100, 100))
  points.push(new p5.Vector(500, 100))
  points.push(new p5.Vector(400, 200))
  points.push(new p5.Vector(500, 500))
  points.push(new p5.Vector(100, 500))

  next()
}

function next() {
  // se incrementa el índice y se 
  // valida si se llegó al tramo final
  index++
  if (index == points.length - 1) {
    index = 0
  }

  // se reinicia el lerp
  t = 0
  dt = lerpDt(points[index], points[index + 1], SPEED)
}

function lerpDt(pi, pf, speed) {
  let distance = dist(pi.x, pi.y, pf.x, pf.y)
  let dt = speed / distance
  return dt
}

function draw() {
  // calcula el lerp
  position = p5.Vector.lerp(points[index], points[index + 1], t)
  t += dt * deltaTime / 1000

  // cuando el lerp termine
  if (t > 1) {
    next()
  }

  background('gold')

  // dibuja los puntos de referencia
  for (i = 0; i < points.length; i++) {
    let point = points[i]

    // si no es el último punto
    // dibuja una línea hacia el siguiente
    if (i != points.length - 1) {
      let nextPoint = points[i + 1]
      line(point.x, point.y, nextPoint.x, nextPoint.y)
    }

    // dibuja
    fill('white')
    circle(point.x, point.y, 30)
    fill('black')
    text(i, point.x, point.y)
  }

  // dibuja
  fill('blue')
  circle(position.x, position.y, 30)
}
