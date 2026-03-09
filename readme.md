# **Sudoku en Javascript**
---
Proyecto sencillo de Sudoku construido con HTML, CSS y JavaScript, donde se genera una cuadrícula 9×9 y se permite al usuario introducir números del 1 al 9. El objetivo es crear un generador y corrector de sudokus.
---
## Estructura del proyecto 
```
SUDOKU/
│
├── static.html          *Página principal*
├── static.css           *Estilos generales*
├── styles_grid.css      *Estilos de la cuadrícula 9x9*
├── scripts.js           *Lógica de interacción con la página*
├── validation.js        *Lógica para generar zonas y coordenadas y validar el sudoku*
└── readme.md            *Este archivo*
```
---
## Funcionamiento
- La página muestra un botón "Crear sudoku".
- Al pulsarlo, se genera una cuadrícula de 9×9 inputs.
- Cada casilla solo permite introducir números del 1 al 9.
- Se añade un botón "Corregir" para las validaciones.
- El archivo validation.js contiene la lógica para generar:
    - Las coordenadas reales de cada casilla y se guardan en la constante *zonas*, que es un array de objetos.
    - Métodos para validar filas.
    - Una función para validar columnas.
    - Se junta todo para validar filas, columnas y cada *zona* de 3x3 independiente.

---
## Estilos
El proyecto utiliza dos hojas de estilo:
- static.css para el diseño general de la página.
- styles_grid.css para la cuadrícula del sudoku, incluyendo:
- Líneas gruesas que separan las zonas 3×3.
- Estilo de las casillas y su comportamiento al recibir foco.
---
## Lógica JavaScript
- scripts.js genera dinámicamente la cuadrícula y controla la interacción del usuario.
- Se validan las teclas permitidas para evitar caracteres no válidos.
- validation.js se encarga de la lógica para validar los sudokus.
---
## Cómo ejecutar
- Abre el archivo static.html en tu navegador.
- Pulsa "Crear sudoku" para generar la cuadrícula.
- Introduce números y prueba si has creado un sudoku válido con el botón "Corregir".
- Todavía no está implementada la función para generar los sudokus aleatoriamente
---
## Licencia
Este proyecto utiliza la licencia MIT, lo que permite usar, modificar y distribuir el código libremente siempre que se mantenga el aviso de copyright.

---

Cosas implementadas y por implementar

- [] Mejora visual general.
- [] Generación automática de tableros válidos.
- [x] Algoritmo de resolución mediante el botón "Corregir".
- [x] Interfaz visual interactiva.
