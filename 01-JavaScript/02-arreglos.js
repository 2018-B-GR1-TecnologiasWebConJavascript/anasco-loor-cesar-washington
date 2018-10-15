var arreglo = [];


var arregloNumeros = [1, 2, 3];

arregloNumeros.push(4);

console.log(arregloNumeros);

arregloNumeros.pop();

console.log(arregloNumeros);


//splice remueve elementos de un arreglo

arregloNumeros.splice(0,2);

console.log(arregloNumeros);

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
// [0,10] Cerradp esta incluido el 10
//

var arregloUno = arregloNumeros.slice(0,2);
console.log(arregloUno);





