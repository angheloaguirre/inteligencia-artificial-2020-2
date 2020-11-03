class Game {
  constructor() {
    Global.player = new Player()
    this.npc1 = new Npc(100, 100)
    this.npc2 = new Npc(500, 500)
  }

  draw() {
    Global.player.draw()
    this.npc1.draw()
    this.npc2.draw()
  }
}