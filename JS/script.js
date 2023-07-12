// seleziono elementi contenitore
const gridElement = document.getElementById("container");
console.log(gridElement);
let bombs = [bombs]
console.log();
let grid = 100
// creo variabie button is palyng 
let isPlayng = false;


function playStart() {

    if (!isPlayng) {
        assignRandomBombs(1, grid)
      
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
            // if (newSquare.classList.contains("square_1" )) {
            //     newSquare.classList.add("bomb")

            // }

           



            newSquare.innerHTML = (i);
            // appendo elemento nel container 
            gridElement.append(newSquare);
            gridElement.append()
          

        }

        isPlayng = true;

    }


}

const play = document.getElementById("playButton").addEventListener("click", playStart);

//    funzioni

function createGridSquare() {
    const nuovoElemento = document.createElement("div");
    nuovoElemento.classList.add("square");
    nuovoElemento.classList.add()
    return nuovoElemento;
}
// const myList = document.getElementById("div1").classList.add
function assignBombs(element) {
    for (let i = 0; i < bombs.length; i++) {
        if (element.classList.contains("square_"+ bombs[i])) {
            element.classList.add("bomb")
        }

    }
}

function assignRandomBombs(min, max) {
    for (let i = 0; i < 16; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        console.log(randomNumber);
        if (bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }
    }
   
}
