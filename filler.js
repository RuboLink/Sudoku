// Encontrar en qué Box se encuentra
let casillas = document.getElementsByClassName("typingBox")
let boxArray = []
let lineXarray = []
let lineYarray = []

// casillas[0].dataset.row   
// casillas[2].dataset.col   

// for(let i = 0; i < 9; i++){
//     let valor = casillas[i]

// }

let boxes = {
    box1: [1,2,3,10,11,12,19,20,21],
    box2: [4,5,6,13,14,15,22,23,24],
    box3: [7,8,9,16,17,18,25,26,27],
    box4: [28,29,30,37,38,39,46,47,48],
    box5: [31,32,33,40,41,42,49,50,51],
    box6: [34,35,36,43,44,45,52,53,54],
    box7: [55,56,57,64,65,66,73,74,75],
    box8: [58,59,60,67,68,69,76,77,78],
    box9: [61,62,63,70,71,72,79,80,81]
}


// Intentando implementar un algoritmo para que las cajas se rellenen solas

// let a = 1

// let box1 = [a, a+1, a+2, a+9, a+10, a+11, a+18, a+19, a+20]

// let x = 1
// let y = 1

// for(let i = 0; i < 9; i++){
//     let b = `box${i+1}`
//     for(let j = 0; j < 3; j++){
//         for(let k = 0; k < 3; k++){
//             boxes[b] = x
//             x++
//         }
//         x = x + 3
//     }
//     y = y + 9
// }