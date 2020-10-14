# EP2: Inteligencia Artificial para videojuegos

Se pide implementar la siguiente mecánica:

- Juego
  - 600x600 píxeles.
  - Debe tener un Menú de inicio, el juego en sí y una pantalla para cuando se pierde mostrando el score.
  - En la pantalla de juego se debe mostrar el puntaje que se va obteniendo.
- Player
  - Color azul.
  - Siempre va hacia desde su posición actual hasta donde se da click utilizando un lerp.
- Item
  - Color amarillo.
  - Se spawnea cada cierto tiempo (a criterio del programador) en una posición aleatoria dentro de la pantalla del juego.
  - Al aparecer, se debe implementar una animación de crecimiento utilizando lerp.
  - Cuando el jugador da click sobre él, este desaparece; ==generando una explosión de cierta cantidad de partículas, las cuales tendrán un tiempo de vida específico==.
  - El jugador gana un punto cada vez que coge un item.
- Enemigo
  - Color rojo.
  - Sigue siempre al player (usar la técnica vista en clase para seguir utilizando lerp).
  - Si llega a alcanzar al player, ==el player explosiona==, el juego termina y se muestra la pantalla con el score obtenido.



Sugerencias: 

- Implementar la práctica en el siguiente orden: Player, Enemigo, Item y Juego.
- Implementar los estados de cada elemento usando máquinas de estados.
- Las funcionalidades resaltadas de color amarillo son opcionales. 
- Todas las funcionalidades que se pide realizar se han visto en las clases. Pueden revisar los vídeos o el código en el repositorio: https://github.com/jersonlatorre/inteligencia-artificial-2020-2



