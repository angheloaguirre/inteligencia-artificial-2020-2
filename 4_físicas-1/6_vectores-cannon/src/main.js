let particles = []

function setup() {
  createCanvas(600, 600)
}

function draw() {
  background('white')
  particles.forEach(particle => {
    particle.draw()
  })
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY))
}