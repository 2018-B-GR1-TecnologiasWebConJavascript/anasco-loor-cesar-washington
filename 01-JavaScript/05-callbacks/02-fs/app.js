// 02-fs/app.js

const fs = require('fs');
//const express = require('express');
const nombreArchivo = 'ejemplo.txt'
const contenidoArchivo = new Date();


//console.log(fs);
//console.log(express);

console.log('Inicio');

fs.readFile(nombreArchivo,'utf-8',
    (error, textoDelArchivoLeido) => { //CALLBACK

        if (error) {
            throw new Error(error);
           try {
               throw new Error(error);
           } catch (e) {
               console.error(e);
           }
        } else {
            console.log(textoDelArchivoLeido);

            //CALLBACK HELL!!!!!!!

            fs.writeFile(nombreArchivo, textoDelArchivoLeido + '\n' + contenidoArchivo, (err) => {
                if (err) throw err;
                console.log('Archivo Guardado');
            });

        }
    }
);
console.log('Fin');
