// Entero = int edad = 10;

// Javascript es un lenguaje NO TIPADO

var edad = 10;

var edadstring =  "10";

var sueldo = 1.234;

var casado = false;

var hijos = null;

var dato;

var fechaNacimient = new Date();

var adrian = {
    "nombre": "Adrian",
    "segundoNombre": 'Vicente',
    apellidoPaterno: `Eguez`,
    edad: 29,
    hijos: null,
    mascotas:{
        nombre: 'Chubaca'
    }
}; //object

console.log("HOLA MUNDO");

console.log('edad', typeof edad);               //number
console.log('edadString',typeof edadstring);    //string
console.log('sueldo',typeof sueldo);            //number
console.log('casado',typeof casado);            //boolean
console.log('hijos', typeof hijos);             //objeto
console.log('dato', typeof  dato);              //indefinido <- es un tipo de dato
console.log('fechaNacimiento',typeof  fechaNacimient);
console.log(adrian.mascotas.nombre);
console.log(adrian);

//Eliminar propiedad de json
delete adrian.hijos;

//AAgregar propiedad a json que sea json
adrian.hija = {
    nombre: 'Susana'
};
console.log(adrian.hija.nombre)

// IF & ELSE

if (true){
    console.log("Si")
} else {
    console.log("No")
}

if (false){ //Falsy
    console.log("Si")
} else {
    console.log("No")
}

if (1){ //Thruthy
    console.log("Si")
} else {
    console.log("No")
}

if (-1){ //Thruthy
    console.log("Si")
} else {
    console.log("No")
}

if ("s"){ //Thruthy
    console.log("Si")
} else {
    console.log("No")
}

if (null){ //Falsy
    console.log("Si")
} else {
    console.log("No")
}

if ({nombre:''}){ //Thruthy
    console.log("Si")
} else {
    console.log("No")
}

if (undefined){ //Falsy
    console.log("Si")
} else {
    console.log("No")
}



