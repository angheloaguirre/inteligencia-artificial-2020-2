### estructura básica

```javascript
// ver carpeta: 0_template
function setup() {
    createCanvas(600, 600)
}

function draW() {
    background('white')
}
```

### dibujo de primitivas

```javascript
// primitivas
circle(x, y, diámetro)
square(x, y, tamaño)
line(x1, y1, x2, y2)

// estilo
stroke(color)
strokeWeight(grosor)
fill(color)
noStroke()
noFill()

// texto
text(texto, x, y)
textSize(tamaño)
textAlign(CENTER, CENTER)
```

### interacción del usuario

```javascript
mouseX
mouseY
key

function mousePressed() {
  // esta función se llama cuando se presiona el mouse
}

function keyPressed() {
  // esta función se llama cuando se presiona el mouse
}
```

