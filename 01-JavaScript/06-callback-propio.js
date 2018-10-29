// 06-callback-propio.js

const fs = require('fs');
let contenidoFinal = 'Inicial';


function appendFiles(nombreArchivo, contenido) {
    // 1) Leer archivo
    // 2.1) Si existe, le añado el contenido al contenido del archivo
    // 2.2) Si no existe, le creo al archivo con el contenido

    // ** Devuelvan el contenido completo del archivo

    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoLeidoDelArchivo) => {
            if (error) {
                // escribimos el archivo
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (error) => {
                        if (err) {
                        console.log('Error Escribiendo');
                                 } else{
                            callback(contenido)
                        }
                    }
                )
            } else{
                // añadimos el contenido del archivo
                // leido al contenido a escribir en el archivo

                fs.writeFile(
                    nombreArchivoç,
                    contenidoLeidoDelArchivo + contenido,
                    (err) => {
                        if (err) {
                            console.log('Error escribiendo');
                        } else {
                            //Devover el contenido
                            callback(contenidoLeidoDelArchivo + contenido)
                        }
                    }
                )
            }
        }
    );

}

function appendFile() {

}

const respuestaAppendFile = appendFiles('06-ejemplo.txt', 'Hola amigos');

appendFiles('06-ejemplo.txt','Hola amigos');

console.log(contenidoFinal);