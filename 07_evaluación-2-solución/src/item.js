// estados de los ítems

class ItemState {}
ItemState.APPEARING = 0
ItemState.IDLE = 1

class Item {
  constructor() {
    this.position = createVector(random(600), random(600))

    // pooling
    this.isDead = false

    // estado
    this.state = ItemState.APPEARING

    // lerp de appearing
    this.tAppearing = 0
    this.dtAppearing = 0.01
  }

  hit() {
    // condición de muerte
    this.isDead = true
    Global.score++

    // cuando ocurre el hit, se crea una nueva explosión
    Global.game.createExplosion(this.position.x, this.position.y)
  }

  draw() {
    switch (this.state) {
      case ItemState.APPEARING: {
        // lerp del diámetro
        let diameter = lerp(0, 30, this.tAppearing)
        this.tAppearing += this.dtAppearing

        if (this.tAppearing > 1) {
          this.state = ItemState.IDLE
        }

        // dibuja
        fill('gold')
        circle(this.position.x, this.position.y, diameter)
        break
      }

      case ItemState.IDLE: {
        // verifica si hay colisión por distancia
        if (dist(this.position.x, this.position.y, Global.player.position.x, Global.player.position.y) < 50) {
          this.hit()
        }

        // dibuja
        fill('gold')
        circle(this.position.x, this.position.y, 30)
        break
      }
    }
  }
}
