// lerp posición
let tx = 0
let speedx = 0
let position
let pStart
let pEnd

// lerp salto
let ty = 0
let speedy = 2
let h = 0
let jumpStart = 0
let jumpEnd = 100
let isJumping = false

function setup() {
  createCanvas(600, 600)

  // inicializa las posiciones
  pStart = new p5.Vector(100, 500)
  pEnd = new p5.Vector(500, 500)
}

function draw() {
  // obtiene la posición actual
  position = p5.Vector.lerp(pStart, pEnd, tx)
  if (tx > 1) {
    tx = 1
  }
  if (tx < 0) {
    tx = 0
  }
  tx += speedx * deltaTime / 1000

  // obtiene la altura actual
  if (isJumping) {
    ty += speedy * deltaTime / 1000
    
    if (ty > 1) {
      isJumping = false
      ty = 1
    }
    
    h = lerp(jumpStart, jumpEnd, parabolic(ty))
  }

  // dibuja el juego
  background('white')
  fill('red')
  circle(pStart.x, pStart.y, 15)
  fill('blue')
  circle(pEnd.x, pEnd.y, 15)
  fill('black')
  circle(position.x, position.y - h, 35)
}

function jump() {
  if (!isJumping) {
    ty = 0
    isJumping = true
  }
}

function moveLeft() {
  speedx = -1
}

function moveRight() {
  speedx = 1
}

function keyPressed() {
  if (key == 'a') {
    moveLeft()
  }

  if (key == 'd') {
    moveRight()
  }

  if (key == 'w') {
    jump()
  }
}

function keyReleased(e) {
  if (!keyIsDown(65) && !keyIsDown(68)) {
    speedx = 0
  }
}

function parabolic(t) {
  return 4 * t - 4 * t * t
}
