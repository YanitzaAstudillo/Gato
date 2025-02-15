const cuadritos = Array.from(document.getElementsByClassName("cuadro"))
const boton = document.getElementById("Reiniciar")

//mover humanoX0 con click - identidad => del forEach - miliretraso a maquina -detecta gane//
const turnos = ["X","O"];
function moverJugador() {
    cuadritos.forEach((cuadro)=> {
        cuadro.addEventListener("click",function(){
           if(cuadro.innerHTML === ""){
              cuadro.innerHTML = turnos[0];
              setTimeout(() => {
                  moverMaquina()
              }, 1000);
              detectarGanar()
            }
        });
    });
}
//mover maquinaO1 usando metodo filter y Math random para casilla aleatoria por tamaño completo//
function moverMaquina() {
    const cuadrosVacios= cuadritos.filter (cuadro => cuadro.innerHTML === "" );
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
        setTimeout(() => {
        alert("GANÓ "+ cuadritos[a].textContent)
        }, 1000);
    }
}
};
//almacenar estadisticas LocalStorage//
let marcador = JSON.parse (localStorage.getItem("ganaHumano")) || []
    if (marcador.length > 0) {
        puntaje (marcador)
    } 
boton.addEventListener("click", function () {
    marcador.push(cuadritos.value)
    localStorage.setItem("ganaHumano", JSON.stringify(marcador))
        puntaje(marcador)
});
let marcador2 = JSON.parse (localStorage.getItem ("ganaMaquina")) || []
    if (marcador2.length > 1) {
        puntaje(marcador2)
}
boton.addEventListener("click", function () {
    marcador2.push(cuadritos.value)
    localStorage.setItem("ganaMaquina", JSON.stringify("ganaMaquina"))
        puntaje(marcador2)
});