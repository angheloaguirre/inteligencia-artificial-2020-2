/**
 * TIMERS
 */

// arreglo de objetos
let particles = []

// cantidad de partículas a emitir
let N_PARTICLES = 20

// timer
let timer = 0

function setup() {
  createCanvas(600, 600)
}

function draw() {
  background('white')

  timer += deltaTime / 1000

  if (timer > 1) {
    createParticles()
    timer = 0
  }

  // removiendo las partículas muertas
  particles.forEach((particle, i) => {
    if (particle.isDead) {
      particles.splice(i, 1)
    }
  })
  
  // dibujando las partículas restantes
  particles.forEach((particle) => {
    particle.draw()
  })
}

function createParticles() {
  for (let i = 0; i < N_PARTICLES; i ++) {
    particles.push(new Particle(300, 300))
  }
}