const casillas = document.getElementsByClassName("typingBox");

async function getRows(){
  
  for(c of casillas){
    let x = c.dataset-row
    let filas = {}

    if(!filas[x]){
      filas[x] = []
    }
    
    filas[x].push(c)
  }

  return filas
}

async function getColumns(){

  for(c of casillas){
    let y = c.dataset-col;
    let columnas = {}

    if(!columnas[y]){
      columnas[y] = []
    }

    columnas[y].push(c)
  }

  return columnas
}