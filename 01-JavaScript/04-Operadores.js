
//OPERADORES

const arreglo = ['A', 'b', 'c'];

const respuesta = arreglo
    .forEach(
        (valorActualDeLaIteracion, indice, arreglo) => {
            console.log('Valor:', valorActualDeLaIteracion);
            console.log('Indice:', indice);
            console.log('Arreglo:', arreglo)
        }
    )

console.log(respuesta);

//Que los trate como strings
if (1 == '1') {
    console.log('Es verdad');
} else {
    console.log('No es verdad');
}

//Que los trate como tipo de datos diferentes
if (0 === '') {
    console.log('Es verdad');
} else {
    console.log('No es verdad');
}

//Imprimir los elementos de un arreglo en consola

arreglo.forEach(v => console.log(v));

// MAP -> Muta el arreglo -> Lo cambia -> lo reasigna en un nuevo arreglo

const respuestaMap = arreglo
    .map (valorActual => valorActual.toUpperCase());

console.log(arreglo);
console.log(respuestaMap);

const arregloNumeros = [9,8,2,6,7,3,4,5,1,10];

//FILTER -> Filtrar el arreglo

const respuestaFilter = arregloNumeros
    .filter(valorActual => valorActual > 5)// Expresion: 1 > 2 .... true);
    .map(valorActual => valorActual + 1)
    .filter(valorActual => valorActual > 7)
    .forEach(valorActual => console.log(valorActual));
console.log(respuestaFilter);

//find index
const respuestaFindIndex = arregloNumeros
    .findIndex(v => v === 7);

console.log(arregloNumeros.indexOf(7));
console.log(respuestaFindIndex);

//find
const respuestaFind = arregloNumeros
    .find( v => v === 7);

console.log(respuestaFind);

//some - noolean
const  respuestaSome = arregloNumeros
    .some( n => n % 7 === 0);

console.log(respuestaSome);

// every
 const  respuestaEvery = arregloNumeros
     .every(n => n < 5);
 console.log(respuestaEvery);

// reduce

console.log(arregloNumeros);
const  respuestaReduce = arregloNumeros
    .reduce(
        (valorActualDeLaOperacion, valorActualDelArreglo)=>{
             return valorActualDeLaOperacion + valorActualDelArreglo;
        },
        0
    );

const  respuestaReduceV2 = arregloNumeros
    .reduce((a,b) => a - b, 100);

console.log(respuestaReduce);
console.log(respuestaReduceV2);