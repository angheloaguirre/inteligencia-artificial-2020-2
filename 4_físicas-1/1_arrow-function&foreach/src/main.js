let nombres = []

function setup() {
  createCanvas(600, 600)
  
  nombres.push('aaa')
  nombres.push('bbb')
  nombres.push('ccc')
  nombres.push('ddd')

  console.log('recorre un arreglo de la manera tradicional')
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
  }

  console.log('recorre un arreglo usando forEach')
  nombres.forEach((nombre) => {
    console.log(nombre)
  })

  console.log('recorre un arreglo usando forEach usando el índice')
  nombres.forEach((nombre, i) => {
    console.log('item: ' + i + ': ' + nombre)
  })
}

function draw() {
  background('white')
}
