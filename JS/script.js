// seleziono elementi contenitore
const play = document.getElementById("playButton").addEventListener("click", playStart);
const gridElement = document.getElementById("container");
console.log(gridElement);
let bombs = []
let grid = 100
// creo variabie button is palyng 
let isPlayng = false;


function playStart() {
    assignRandomBombs(1, grid)
        console.log(bombs);
    if (!isPlayng) {
       
        // creo ciclo di operazione output
        for (let i = 1; i <= grid; i++) {

            // creo un novo elemento 
            const newSquare = createGridSquare();
            // Assegna classe univoco
            newSquare.classList.add("square_" + i)

            // Assegna eventListner 
            newSquare.addEventListener("click",
                function () {
                    if (newSquare.classList.contains("bomb")) {
                        newSquare.classList.add("clicked_bomb")
                    }
                    newSquare.classList.add("clicked")
                    console.log(i);
                }
            );
            assignBombs(newSquare)
            newSquare.innerHTML = (i);
            // appendo elemento nel container 
            gridElement.append(newSquare)
        }
        isPlayng = true;
    }

}



//    funzioni

function createGridSquare() {
    const nuovoElemento = document.createElement("div");
    nuovoElemento.classList.add("square");
    return nuovoElemento;
}
// const myList = document.getElementById("div1").classList.add
function assignBombs(element) {
    for (let i = 0; i < bombs.length; i++) {
        if (element.classList.contains ( `square_${bombs[i]}` )) {
            element.classList.add("bomb")
        }
       
    }
    
}

function assignRandomBombs(min, max) {
    for (let i = 0; i < 16 ; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        console.log(randomNumber);
        
            bombs.push(randomNumber);
        
    }

}
