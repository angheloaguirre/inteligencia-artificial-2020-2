class GameState {}
GameState.MENU = 0
GameState.GAMEPLAY = 1
GameState.SCORE = 2

class Game {
  constructor() {
    this.obstacles = []
    this.time = 0
    this.rails = [ 100, 240, 380 ]
    this.state = GameState.MENU
    Global.player = new Player()
  }

  draw() {
    switch (this.state) {
      case GameState.MENU: {
        fill('black')
        rect(0, 0, 480, 600)
        fill('white')
        textSize(16)
        text('Presione ESPACIO para empezar.', 110, 300)
        break
      }
      
      case GameState.GAMEPLAY: {
        // dibuja los carriles
        stroke('lightgray')
        line(100, 0, 100, 600)
        line(240, 0, 240, 600)
        line(380, 0, 380, 600)
        
        fill('black')
        textSize(30)
        text('Score: ' + Global.score, 20, 40)
        
        // uso del timer
        this.time += deltaTime / 1000
        if (this.time > 0.7) {
          this.spawnObstacle()
          this.time = 0
        }
        
        // pooling
        // validación
        this.obstacles.forEach((obstacle, i) => {
          if (obstacle.isDead) {
            this.obstacles.splice(i, 1)
          }
        })
        
        // actualización
        this.obstacles.forEach((obstacle) => {
          obstacle.draw()
        })
        
        // dibuja el player
        Global.player.draw()
        
        break
      }
      
      case GameState.SCORE: {
        textSize(16)
        fill('green')
        rect(0, 0, 480, 600)
        fill('white')
        text('Total Score: ' + Global.score, 110, 300)
        text('Presione ESPACIO para empezar.', 110, 320)
        break
      }
    }
  }
  
  spawnObstacle() {
    let obstacle = new Obstacle(random(this.rails))
    this.obstacles.push(obstacle)
  }

  endLevel() {
    this.state = GameState.SCORE
  }

  keyPressed(event) {
    Global.player.keyPressed(event)

    switch (this.state) {
      case GameState.MENU: {
        if (event.keyCode == 32) {
          this.state = GameState.GAMEPLAY
        }
        break
      }

      case GameState.SCORE: {
        if (event.keyCode == 32) {
          Global.score = 0
          Global.player.state = PlayerState.CENTER
          this.obstacles = []

          this.state = GameState.GAMEPLAY
        }
        break
      }
    }
  }
}
