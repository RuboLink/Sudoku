const mainGrid = document.getElementById("mainGrid");
const createButton = document.getElementById("createGrid");
createButton.style.display = "grid";
const body = document.getElementsByTagName("body");

async function Grid() {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            mainGrid.innerHTML += `
                <input 
                    class="typingBox" 
                    type="text"
                    maxlength="1"
                    pattern="[1-9]"
                    data-row="${x}"
                    data-col="${y}"
                >
            `;
        }
    }
}

createButton.addEventListener("click", async () => {
    mainGrid.style.display = "grid";
    createButton.style.display = "none";
    await Grid();

    body[0].innerHTML += `<button id="checkResults">Corregir</button>`;

    const casillas = document.getElementsByClassName("typingBox");

    for (let c of casillas) {
        c.addEventListener("keydown", (e) => {
            const permitidas = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"];

            if (permitidas.includes(e.key)) return;

            if (!/^[1-9]$/.test(e.key)) {
                e.preventDefault();
            }
        });
    }

    
    const checkButton = document.getElementById("checkResults")

    checkButton.addEventListener("click", async () => {
        console.log("Boton pulsado")
        let test = await checkBoard()
        console.log("Resultado: ", test)
        if(test){
            alert("¡Sudoku completado correctamente!")
        } else {
            alert("Revisa de nuevo. Algo falla")
        }
    })
});
