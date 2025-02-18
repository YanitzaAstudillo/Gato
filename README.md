README

Para definir la constante de cada uno de los cuadros, los llamé cuadritos.
Aplico el getElementsByClassName al array completo de las div class.
Identifico a los elementos constantes de todo el juego, en este caso:
 "X" y cero para humano y "O" y uno para maquina para el reconocimiento.

Para la funcion de mover el humano con click, se recorren los elementos
de todos los cuadros con el ForEach,con las condicional if si cuadro es
exactamente al el click del turno a jugar, en este caso el click del humano,
con respuesta de la maquina con un retraso de respuesta de 1000 milisegundos
aplicado con setTimeout.

Funcion movimiento maquina, se utiiza el metodo filter en los cuadros vacios
para que la maquina rastree o reconozca el movimiento del humano, para que
la maquina elija con el Math random (en este caso math floor para que funcione)
Identificando "O" y 1 para el turno de ella.
Funcion boton para el reinicio: se identifica el click para su funcion cuando
asi lo requiera.

Funcion validar filas, columnas y diagonales, se declaran las variables Let Contador
para X y O anteriormente y luego Let ganadoras,
filas primero luego las columnas y por ultimo las dos unicas diagonales,
se nombra la funcion DetectarGanar con la declaracion For of para itinerar cada una de las
posiciones ganadoras, se le asigna valores a cada una de las posiciones en el
recorrido, si el contenido vacio es distinto a vacio y se cumplen las
condiciones dadas, (especificando solo el primer recorrido a,b,c),
Mensaje de victoria con alert : Gano X ó Ganó O dependiendo del caso, dentro de la funcion con
condicional if y else. Se agregó un corto retardo en el mensaje de mil milisegundos (setTimeout).

Funcion Cuenta regresiva, para ello nombramos anteriormente la constante temporizador,
llamndo al id tiempo para el timer insertado en el HMTL, poniendo un setInterval y 
especificando la condicional Si el tiempo es mayor a 0.
Se elimina el conteo regresivo negativo. Y Si el tiempo es estrictamente igual a 0,
Si y solo Si Tiempo es distinto a la variable bandera roja (redflag, declarada anteriormente como falsa),
Se activa la alerta Game Over, cuando se da la variable redflag.
Acotacion, para romper el ciclo de alertas infinitas, se rompe con la condicional true or
false, dependiendo del caso.

Activar boton para empezar juego con cuenta regresiva,para ello lo activamos con
el evento AddEventListener al momento del click, (jalando el el button id "empezarJuego").
En el Js, se llama a la constante button (igual a empezarJuego). Si cuenta regresiva es
estrictamente igual a 0. Se agrega window location reload para que que recargue la pag.
Todo esto dentro de la funcion Cuenta Regresiva.

Funcion empate con addElement, para ello anteriormente declaramos verdadera la variable "empate",
introduciendola dentro de las funciones "moverJugador" y "mover maquina" para que q la detecte.
Declaramos tambien las variables "ganador" (es falso) y la variable "jugadas" (igual a 0)
para que se ejecute si las jugadas es estrictamente igual a 9 movimientos Si solo Si es distinto
a la variable Ganador y Si solo Si es a empate, se activa la alerta "Empate".

En Css, se le da color al body clarito, el container se le da estilo a los cuadritos,
el id de cuadro se le dan los bordes, anchura y alto general. AL boton reiniciar se le da
forma y estilo hover para resaltar. El id juego, el estilo de la letra.
El container2 va a contener el boton Empezar juego, para ponerle un estilo diferente,
tambien se le coloca hover. Para resaltar el estilo, le agregué un emoji de un tigrito
tanto en el HTML y en el Css para modificarle la posicion.
