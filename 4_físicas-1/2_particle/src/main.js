let particle

function setup() {
  createCanvas(600, 600)
  particle = new Particle()
}

function draw() {
  background('white')
  particle.draw()
}