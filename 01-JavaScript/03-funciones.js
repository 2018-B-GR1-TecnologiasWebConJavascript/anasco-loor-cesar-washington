
//JavaScript puede ejecutar funciones en cualquier estancia del codigo, ya sea antes de que se declare la funcion

holaMundo();

function holaMundo() {
    console.log("Hola Mundo");
}

//En JavaScript las funciones devuelven undefined o lo que tengan en el return

console.log(holaMundo());

function sumarDosNumeros(numeroUno, numeroDos)  {
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';

    if (numeroUnoEsValido && numeroDosEsValido){
        return numeroUno + numeroDos;
    }  else {
        console.error('Parametros no son numeros')
        return 0;
    }
    return numeroUno + numeroDos;
}

console.log(sumarDosNumeros(1,2,3,4,5));

console.log(sumarDosNumeros(true ,0, [],3,4,5));

/*Los parametros que llegan a las funciones llegan como arreglos

function sumarNNumeros(...numeros) {//Destructuracion de argumentos

    var resultado = calcularResultadoSumarNNumeros(numeros);

    if (resultado.esValido){
        return resultado.suma;
    } else {
        return 0;
    }

    //console.log(numeros);
}


function calcularResultadoSumarNNumeros (numeros) {
    var suma = 0;
    var todosLosNumerosSonValidos = true;

    for (var i=0; i< numeros.length; i++){
        numeroEsValido = typeof numeros[i] == 'number';
        if (numeroEsValido){
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
}

console.log(sumarNNumeros(true,1,2,3));

*/


//Javascript permite mandar funciones como parametros
function saludar(nombre, funcion) {
    //funcion();
    return `Hola ${funcion(nombre)}`;
}

console.log(saludar("aDrIaN", holaMundo)); //definicion de una funcion, sin ()

console.log(saludar("AdRian", nombreEnMayusculas));
console.log(saludar("AdRian", nombreEnMinusculas));
console.log(saludar("AdRian", nombreConPuntoAlFinal));

function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase();
}

function nombreEnMinusculas(nombre) {
    return nombre.toLowerCase();
}

function nombreConPuntoAlFinal(nombre) {
    return nombre + ".";
}
