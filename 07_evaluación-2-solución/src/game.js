// estados del juego
class GameState {}
GameState.MENU = 0
GameState.GAMEPLAY = 1
GameState.SCORE = 2

class Game {
  constructor() {
    Global.player = new Player()
    this.enemy = new Enemy()
    this.items = []

    this.explosions = []

    this.time = 0
    this.SPAWN_TIME = 1
    this.state = GameState.MENU
  }

  draw() {
    switch (this.state) {
      case GameState.MENU: {
        noStroke()
        fill('gold')
        rect(0, 0, 600, 600)
        break
      }

      case GameState.GAMEPLAY: {
        // pooling de explosiones
        this.items.forEach((item, i) => {
          if (item.isDead) {
            this.items.splice(i, 1)
          }
        })

        this.items.forEach((item) => {
          item.draw()
        })

        // propagación del draw
        this.enemy.draw()
        Global.player.draw()

        // timer
        this.time += deltaTime / 1000
        if (this.time > this.SPAWN_TIME) {
          this.time = 0
          this.spawnItem()
        }

        // pooling de explosiones
        this.explosions.forEach((explosion, i) => {
          if (explosion.isDead) {
            this.explosions.splice(i, 1)
          }
        })
        
        this.explosions.forEach((explosion) => {
          explosion.draw()
        })

        // dibuja
        fill('black')
        textSize(25)
        text('score: ' + Global.score, 20, 30)

        break
      }

      case GameState.SCORE: {
        noStroke()
        fill('black')
        rect(0, 0, 600, 600)

        fill('white')
        textSize(25)
        text('total score: ' + Global.score, 20, 30)

        break
      }
    }
  }

  createExplosion(x, y) {
    this.explosions.push(new Explosion(x, y))
  }

  endGame() {
    Global.player = new Player()
    this.enemy = new Enemy()
    this.item = []

    this.state = GameState.SCORE
  }

  spawnItem() {
    let item = new Item()
    this.items.push(item)
  }

  mousePressed(e) {
    Global.player.mousePressed(e)

    switch (this.state) {
      case GameState.MENU: {
        this.state = GameState.GAMEPLAY
        break
      }

      case GameState.SCORE: {
        this.state = GameState.GAMEPLAY
        break
      }
    }
  }
}
