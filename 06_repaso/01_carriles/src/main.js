function setup() {
  createCanvas(480, 600)
  Global.game = new Game()
}

function draw() {
  background('white')
  Global.game.draw()
}

function keyPressed(event) {
  Global.game.keyPressed(event)
}