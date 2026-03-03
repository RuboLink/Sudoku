const mainGrid = document.getElementById("mainGrid")
const createButton = document.getElementById("createGrid")
createButton.style.display = "grid"
const body = document.getElementsByTagName("body")

async function oneGrid(){
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            mainGrid.innerHTML += `
                <input 
                    class="typingBox" 
                    type="number" 
                    min="0" 
                    max="9"
                    data-row="${x}"
                    data-col="${y}"
                >`
        }
    }
}

// async function corrections(){
//     let casillas = document.getElementsByClassName("typingBox");
//     casillas.forEach(n => {
//         console.log(n)
//     })
// }

createButton.addEventListener("click", async () => {
    mainGrid.style.display = "grid"
    createButton.style.display = "none"
    await oneGrid()
    body[0].innerHTML += `<button id="checkResults">Corregir</button>`

    const correct = document.getElementById("checkResults")
    correct.addEventListener("click", async() => {
    let nuevo = 0
    for(let n of casillas){
        nuevo++
        n.value = nuevo
    }
})
});

