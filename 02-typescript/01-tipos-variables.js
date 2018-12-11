// 01-tipo-variables.ts
//let edad:number | string = 13;
let variableLoca = '';
variableLoca = false;
//let nombre:string = 'Adrian';    NO ES NECESARIO
let nombre = 'Adrian';
//duck typing ->
//nombre = 13;
let casado = false;
let adrian = {
    nombre: 'Adrian',
    apellido: 'Salas'
};
let fechaNacimiento = new Date();
//Mediante la misma clase se tipean las instancias de  una clase
/*
let promesa:Promise<number> = ()=> {
    return new Promise(
        executor: (resolve,reject) => {
            resolve(1);
    };
    );
};
*/
console.log(adrian);
let numeros = [1, 2, 3, 4];
//Doc typing
function saludar(nombre, apellido, ...otrosNombres) {
    return '';
}
//Casteo de datos
//let respuestSaludar = <string> saludar(nombre:'',apellido='',otrosNombres='','','');
//respuestaSaludar = 1:
console.log();
//CLASE
class Usuario {
    constructor() {
    }
    saludar(nombre) {
        return nombre;
    }
}
;
const adrianInstancia = new Usuario();
class UsuarioDummy {
}
const vicente = {
    nombre: 'Vicente',
    apellido: 'Eguez'
};
