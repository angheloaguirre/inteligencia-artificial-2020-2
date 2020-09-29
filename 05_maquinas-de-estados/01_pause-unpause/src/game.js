class Game {
  constructor() {
    this.npc = new Npc()
  }

  draw() {
    this.npc.draw()
  }

  keyPressed(key) {
    if (key == ' ') {
      this.npc.spacebarPressed()
    }
  }
}