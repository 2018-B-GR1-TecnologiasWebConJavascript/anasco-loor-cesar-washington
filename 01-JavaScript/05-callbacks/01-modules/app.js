
const version = require('./version');
const numeroProcesadores = require('./numero-procesadores');
const calculadora = require('./calculadora-simple');
const versionNode = require('./version-node/version-node');

//Para acceder directamente
const sinUso = require('../../04-Operadores');

console.log('version', version);
console.log('versiomnNode', versionNode)
console.log('numeroProcesadores', numeroProcesadores);


console.log(calculadora.sumar(1,2));
console.log(calculadora.restar(3,5));
console.log(calculadora.multiplicar(4,2));
console.log(calculadora.dividir(4,2));

// const fs = require('fs');
