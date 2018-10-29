// 06-callback-propio.js

const fs = require('fs');
let contenidoFinal = 'Inicial';


function appendFile(nombreArchivo, contenido, callback) {
    // 1) Leer archivo
    // 2.1) Si existe, le anado el contenido al contenido
    //      del archivo
    // 2.2) Si no existe, le creo al archivo con el contenido

    // **Devuelvan el contenido completo del archivo**
    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoLeidoDelArchivo) => {
            if (error) {
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) => {
                        if (err) {
                            callback(undefined, err)
                        } else {
                            // Devolver el contenido
                            callback(contenido);
                        }
                    }
                );
            } else {

                fs.writeFile(
                    nombreArchivo,
                    contenidoLeidoDelArchivo + contenido,
                    (err) => {
                        if (err) {
                            callback(undefined, err);
                        } else {
                            // Devolver el contenido
                            callback(contenidoLeidoDelArchivo + contenido)
                        }
                    }
                )
            }
        }
    );
}


//el callback propio sirve para devolver

appendFile(
    '06-ejemplo.txt',
    '\nHola amigos',
    (contenido, err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(contenido);
        }
    }
);



/*

// ['A','B','C']

//  0-A,txt       'A'
//  1-B.txt       'B'
//  2-C.txt       'C'

const respuesta = {
    nombreArchivo: '',
    contenidoArchivo: '',
    error: '',
};

[respuesta, respuesta, respuesta, respuesta]

function ejercicio(arregloStrings, callback) {

    const  respuesta = [];

    arregloStrings
        .forEach(
            (string, indice)=>{
                const nombreArchivo = `${indice}-${string}.txt;`
                const contenido = string;

                fs.writefila(
                    nombreArchivo,
                    contenido,
                    (err) => {
                       const respuesta = {
                           nombreArchivo: nombreArchivo,
                           contenidoArchivo: contenido,
                           error: err,
                       };
                       respuestas.push(respuesta);

                       const estaCompletoElArreglo = respuestas.length ===
                           if(estaCompletoElArreglo){
                               callback(respuestas);
                           }
                    }
                )
            })
}

ejercicio(
    ['A','B','C'],
    (respuestaEjercicio) => {
        console.log(respuestaEjercicio);
    }
)

*/