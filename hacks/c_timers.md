### timers

```javascript
let timer = 0
let TIEMPO = 1

function setup() {
  
}

function draw() {
  timer += deltaTime
  
  if (timer > TIEMPO) {
    timer = 0
    callback()
  }
}

function callback() {
  // código a ejecutar cada TIEMPO
  // ejemplo -> disparos, spawnear enemigos, etc
}
```

 