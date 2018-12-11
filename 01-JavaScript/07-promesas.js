// 07-promesas.js

const fs = require('fs');
const nombre = '06-ejemplo.txt';

const nuevaPromesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err){
                        reject(err);
                    } else {
                        resolve(contenidoLeidoDelArchivo);
                    }
                }
            )
        }
    );

}


const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo);
                    }

                }
            )
        }
    )
};

nuevaPromesa(nombre)
    .then(
    (contenido) => {
        console.log('Ok', contenido);
        //concatenando promesas
        return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos')
    }
    )
    .then(
        (contenidoArchivoEscrito)=>{
            console.log(contenidoArchivoEscrito);
        }
    )
    .catch(
    (error) => {
        console.error('Mal', error);
    }
    )



// FUNCION APPEND FILE EN PROMESA

const promesaAppend = (nombreArchivo, contenido) => {


        // 1) Leer archivo
        // 2.1) Si existe, le anado el contenido al contenido
        //      del archivo
        // 2.2) Si no existe, le creo al archivo con el contenido

        // **Devuelvan el contenido completo del archivo**
    return new Promise(
        (resolve, reject) => {


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
                                reject(err)
                            } else {
                                // Devolver el contenido
                                resolve(contenido);
                            }
                        }
                    );
                } else {

                    fs.writeFile(
                        nombreArchivo,
                        contenidoLeidoDelArchivo + contenido,
                        (err) => {
                            if (err) {
                                reject(err);
                            } else {
                                // Devolver el contenido
                                resolve(contenidoLeidoDelArchivo + contenido);
                            }
                        }
                    )
                }

            }
        );

        }
    );

};

promesaAppend('07-ejemplo3.txt',nombre)
    .then(
        (contenido) => {
            console.log('Ok', contenido);
        }
    )
    .catch(
        (error) => {
            console.error('Mal', error);
        }
    )


// FUNCION DEBER
//  ['D', 'E', 'F']

//0-D.txt 'D'
//1-E.txt 'E'
//2-F.txt 'F'

const respuesta2 = {
    nombreArchivo: '',
    contenidoArchivo: '',
    error: '',
};

//[respuesta, respuesta, respuesta]

const promesaEjercicio = (arregloStrings) => {
    const respuestas = [];
    return new Promise(
        (resolve) => {
            arregloStrings
                .forEach(
                    (string, indice) => {
                        const contenido = string;
                        const nombreArchivo = `${indice}-${contenido}.txt`;
                        fs.writeFile(
                            nombreArchivo,
                            contenido,
                            (err) => {
                                const respuesta = {
                                    nombreArchivo: nombreArchivo,
                                    contenidoArchivo: contenido,
                                    error: err,
                                };
                                respuestas.push(respuesta);
                                const estaCompletoElArreglo = respuestas.length === arregloStrings.length;
                                if (estaCompletoElArreglo) {
                                    resolve(respuestas);
                                }
                            }
                        )
                    }
                )
        }
    )
};

promesaEjercicio(['D', 'E', 'F'])
    .then(
        (respuestaEjercicio) => {
            console.log(respuestaEjercicio)
        }
    );
