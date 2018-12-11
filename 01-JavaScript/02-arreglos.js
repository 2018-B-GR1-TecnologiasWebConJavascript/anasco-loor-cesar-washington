var arreglo = [];


var arregloNumeros = [1, 2, 3];

//acceso
console.log(arreglo[3]);

arregloNumeros.push(4);

console.log(arregloNumeros);

arregloNumeros.pop();

console.log(arregloNumeros);


//splice borrar

arregloNumeros.splice(0,2);

console.log(arregloNumeros);

//splice agregar

//Primer difito posicion
//
// del tercero en adelante son los elementos que se van a agregar.

arregloNumeros.splice(1,0,4,5,6,7,8,9);

console.log(arregloNumeros);

// eliminar el # 6

var indiceNumeroSeis = arregloNumeros.indexOf(6);

arregloNumeros.splice(indiceNumeroSeis,1);

console.log(arregloNumeros);

//Para dividir arreglos
// [0,10] Cerrado esta incluido el 10
// [0,10[ Abierto esta excuido el 10

var arregloUno = arregloNumeros.slice(0,2);
var arregloDos = arregloNumeros.slice(3,6);

var arregloUnoDos = [1, 2];
var arregloSeis = [6];

//Destructuracion de arreglos,
var arregloTotal = [];
console.log(...arregloUnoDos);
console.log(1, 2);
var arregloTotal = [...arregloUnoDos, ...arregloUno, ...arregloSeis, ...arregloDos];
console.log(arregloTotal);

var arregloSiguientesNumeros = [10,11,12,14,15,16,17,18,19];

arregloTotal.splice(arregloTotal.length,0, ...arregloSiguientesNumeros);
console.log(arregloTotal);
//arregloDos.push(7);
//var indiceSiete = arregloDos.indexOf(7);

//console.log(arregloUno);
//console.log(arregloDos);
//console.log(indiceSiete);

//Destructuracion de objetos

var vicente = {
    nombre:"Vicente",
    apellidoPaterno: "Eguez"
};

var eguez = {
    sueldo: 1.10
};

var adrian = {
    edad: 10,
    casado: false,
    hijos: null,
    mascota: {
        nombre: "Cachetes"
    }
} ;

var vicenteAdrianEguez = {
    ...vicente,
    ...adrian,
    ...eguez
};

console.log(vicenteAdrianEguez);



