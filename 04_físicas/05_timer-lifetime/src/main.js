/**
 * POOLING DE OBJETOS
 */

// arreglo de objetos
let particles = []

// cantidad de partículas a emitir
let N_PARTICLES = 100

function setup() {
  createCanvas(600, 600)
}

function draw() {
  background('white')

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

  console.log(particles.length)
}

function mousePressed() {
  for (let i = 0; i < N_PARTICLES; i++) {
    particles.push(new Particle(mouseX, mouseY))
  }
}
