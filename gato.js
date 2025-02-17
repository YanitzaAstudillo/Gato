const cuadritos = Array.from(document.getElementsByClassName("cuadro"))
const boton = document.getElementById("reiniciar")
const button = document.getElementById("empezarJuego")
const temporizador = document.getElementById("tiempo")
let contadorX = 0
let contadorO = 0


//mover humanoX0 con click - identidad => del forEach - miliretraso a maquina -detecta gane//
const turnos = ["X","O"];
function moverJugador() {
    cuadritos.forEach((cuadro)=> {
        cuadro.addEventListener("click",function(){
           if(cuadro.innerHTML === ""){
              cuadro.innerHTML = turnos[0];
              setTimeout(() => {
                  moverMaquina()
              }, 800)
              detectarGanar()
              
            }
        });
    });
}
//mover maquinaO1 usando metodo filter y Math random para casilla aleatoria por tamaño completo//
function moverMaquina() {
    const cuadrosVacios= cuadritos.filter (cuadro => cuadro.innerHTML === "");
    if (cuadrosVacios.length > 0) {
        const cuadroCualquiera = cuadrosVacios [Math.floor(Math.random() * cuadrosVacios.length)];
            cuadroCualquiera.innerHTML = turnos[1];
                moverJugador()
                detectarGanar()
            };
    };
moverJugador()
//funcion boton reinicio//
boton.addEventListener ("click", function () {
    cuadritos.forEach ((cuadro) =>{
        cuadro.innerHTML = ""
    }) 
});
//validar tres simbolos iguales en filas columnas diagonales//
let ganadoras = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
function detectarGanar() {
for (const poss of ganadoras) {
    let [a,b,c] = poss
    if (cuadritos[a].textContent != "" && cuadritos[a].textContent === cuadritos[b].textContent && cuadritos[a].textContent === cuadritos[c].textContent) {
       if (cuadritos[a].textContent === "X") {
           localStorage.setItem("contadorX",contadorX)
            contadorX++
            setTimeout (() =>{
                alert("GANÓ X")
            },1000)
            return
            
       }else if(cuadritos[a].textContent === "O"){
           localStorage.setItem("contadorO",contadorO)
            contadorO++
            setTimeout (() =>{
                alert("GANÓ O")
            },1000)
            return
       }
    }
}
};
//  cuenta regresiva con setInterval//
let terminaCuenta =false
let redflag =false

function cuentaRegresiva(tiempo){
    setInterval(() => {
        if (tiempo>0) {
            tiempo--
            temporizador.textContent=tiempo
        }
        if (tiempo===0 && !redflag) {
            alert ("GAME OVER")
            redflag = true
         }  
    }, 1000);
}
// funcion button empezar juego //
button.addEventListener ("click", function () {
    cuentaRegresiva(8)
    if (cuentaRegresiva === 0) {
        window.location.reload();
    }
});

