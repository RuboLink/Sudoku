# **Sudoku en Javascript**
---
Proyecto sencillo de Sudoku construido con HTML, CSS y JavaScript, donde se genera una cuadrícula 9×9 y se permite al usuario introducir números del 1 al 9. El objetivo es crear un generador y corrector de sudokus.
---
## Estructura del proyecto 
SUDOKU/
│
├── static.html          *Página principal*
├── static.css           *Estilos generales*
├── styles_grid.css      *Estilos de la cuadrícula 9x9*
├── scripts.js           *Lógica de interacción con la página*
├── filler.js            *Lógica para generar zonas y coordenadas*
└── readme.md            *Este archivo*
---
## Funcionamiento
- La página muestra un botón "Crear sudoku".
- Al pulsarlo, se genera una cuadrícula de 9×9 inputs.
- Cada casilla solo permite introducir números del 1 al 9.
- Se añade un botón "Corregir" para futuras validaciones.
- El archivo filler.js contiene la lógica para generar:
    - Las coordenadas reales de cada casilla y se guardan en la constante *zonas*, que es un array de objetos.
    - Métodos para validar filas.
    - Una función para validar columnas

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
- filler.js contiene funciones para:
- Obtener filas y columnas.
- Generar las zonas 3×3 con sus coordenadas.
---
## Cómo ejecutar
- Abre el archivo static.html en tu navegador.
- Pulsa "Crear sudoku" para generar la cuadrícula.
- Introduce números y continúa desarrollando la lógica de validación.
---
## Licencia
Este proyecto utiliza la licencia MIT, lo que permite usar, modificar y distribuir el código libremente siempre que se mantenga el aviso de copyright.

---

Cosas implementadas y por implementar

- [] Mejora visual general.
- [] Generación automática de tableros válidos.
- [] Algoritmo de resolución mediante el botón "Corregir".
- [x] Interfaz visual interactiva.
- [] Sistema de validación en tiempo real.
