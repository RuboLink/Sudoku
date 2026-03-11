const casillas = document.getElementsByClassName("typingBox");

// Funciones para obtener TODAS las filas y columnas en arrays

async function getRows(){
  let filas = {}

  for(let c of casillas){
    let x = c.dataset.row
    
    if(!filas[x]){
      filas[x] = []
    }

    filas[x].push(c)
  }
  return filas
}

async function getColumns(){
  let columnas = {}

  for(let c of casillas){
    let y = c.dataset.col;
    
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

// Funciones para comprobar todas las filas y todas las columnas

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



function getValueAt(x, y) {
  return document.querySelector(`[data-row="${x-1}"][data-col="${y-1}"]`).value;
}

async function checkBoxes() {
  const zonas = await generarCoordenadas();

  for (const z of zonas) {
    const valores = z.casillas.map(c => getValueAt(c.coordenadas.x, c.coordenadas.y));

    if (valores.includes("")) return false;

    const set = new Set(valores);
    if (set.size !== valores.length) return false;
  }

  return true;
}

async function checkBoard() {
  const filasOK = await checkRow();
  const columnasOK = await checkColumn();
  const cajasOK = await checkBoxes();

  return filasOK && columnasOK && cajasOK;
}

// Funciones para obtener una fila/columna y comprobarla individualmente

async function getSingleRow(currentBox){
  const x = currentBox.dataset.row
  let row = []
  for(let c of casillas){
    if(c.dataset.row === x){
      row.push(c.value)
    }
  }
  return row
}

async function checkSingleRow(currentBox){
  const row = getSingleBox(currentBox)
  let set = new Set()
  let finalSet = new Set()
  for(let c of row){
    if(c !== 0){
      set.add(c)
    }
  }
  
  for(let s of set){
    finalSet.add(s)
  }
  
  if(set.size === finalSet.size) return true;
  else return false;
}

async function getSingleCol(currentBox){
  const y = currentBox.dataset.col
  let column = []
  for(let c of casillas){
    if(c.dataset.col === y){
      row.push(c.value)
    }
  }
  return row
}

async function checkSingleCol(currentBox){
  const column = getSingleBox(currentBox)
  let set = new Set()
  let finalSet = new Set()
  for(let c of column){
    if(c !== 0){
      set.add(c)
    }
  }
  
  for(let s of set){
    finalSet.add(s)
  }
  
  if(set.size === finalSet.size) return true;
  else return false;
}

async function getZone(currentBox){
  const zonas = await generarCoordenadas();
  const x = currentBox.dataset.row;
  const y = currentBox.dataset.col;
  let currentZone
  for(let z of zonas){
    for(let c of z.casillas){
      if(x === c.coordenadas.x && y === c.coordenadas.y){
        currentZone = z.zona
      }
    }
  }
  return currentZone
}