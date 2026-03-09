const casillas = document.getElementsByClassName("typingBox");

async function getRows(){
  let filas = {}

  for(c of casillas){
    let x = c.dataset-row
    
    if(!filas[x]){
      filas[x] = []
    }

    filas[x].push(c)
  }
  return filas
}

async function getColumns(){
  let columnas = {}

  for(c of casillas){
    let y = c.dataset-col;
    
    if(!columnas[y]){
      columnas[y] = []
    }

    columnas[y].push(c)
  }
  return columnas
}

async function generarCoordenadas(){

  const zonas = [];

  for (let zona = 1; zona <= 9; zona++) {

      // Calcular la fila y columna inicial de la zona
      const fila_base = Math.floor((zona - 1) / 3) * 3;
      const col_base  = ((zona - 1) % 3) * 3;

      const casillas = [];

      for (let i = 0; i < 9; i++) {

          // Calcular coordenadas reales dentro del tablero 9x9
          const x = fila_base + Math.floor(i / 3) + 1; // fila real
          const y = col_base  + (i % 3) + 1;           // columna real

          casillas.push({
              zona: zona,
              casilla: i + 1,
              coordenadas: { x, y }
          });
      }

      zonas.push({
          zona: zona,
          casillas: casillas
      });
  }

  return zonas

}


const zonas = await generarCoordenadas()

async function checkRow(){
  const filas = await getRows()
  for(let i = 0; i < 9; i++){
    let fila = filas[i];
    const valores = fila.map(c => c.value);
    const set = new Set(valores)

    if(valores.includes("")){
      return false
    }
    if(set.size !== valores.length){
      return false;
    }
  }
  return true
}

async function checkColumn(){
  const columnas = await getColumns()
  for(let i = 0; i < 9; i++){
    let columna = columnas[i];
    const valores = columna.map(c => c.value);
    const set = new Set(valores)

    if(valores.includes("")){
      return false
    }
    if(set.size !== valores.length){
      return false;
    }
  }
  return true
}