/*
/   PROTOTIPO PROYECTO EN CONSOLA V2
*/
//DECLARACIONES
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Bienvenido al Sistema de Adopcion de Perros',
    choices: [
        '1.- Registrar',
        '2.- Eliminar Registros',
        '3.- Actualizar Registros',
        '4.- Buscar Registros',
        '5.- Salir',
    ]
};
const preguntaRegistroUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es tu id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es tu nombre'
    },
    {
        type: 'input',
        name: 'tipo',
        message: 'Cual es tu tipo de usuario'
    },
];
const preguntaIdRegistro = [
    {
        type: 'input',
        name: 'idRegistro',
        message: 'Ingresa el id del registro:'
    }
];
const preguntaEdicionUsuario = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es el nuevo nombre'
    },
];
//MAIN
function main() {
    inicializarBase()
        .pipe(desplegarOpcionesMenu(), seleccionarRespuesta(), ejecutarRespuesta(), actualizarBDD())
        .subscribe((respuesta) => {
        //console.log(respuesta);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('Accion Realizada Correctamente');
        main();
    });
}
//FUNCIONES
function seleccionarRespuesta() {
    return mergeMap((respuestaBDD) => {
        const opcion = respuestaBDD.opcionMenu.opcionMenu;
        switch (opcion) {
            case '1.- Registrar':
                return ingresarRegistro(respuestaBDD);
                break;
            case '2.- Eliminar Registros':
                return eliminarRegistro(respuestaBDD);
                break;
            case '3.- Actualizar Registros':
                return actualizarRegistro(respuestaBDD);
                break;
            case '4.- Buscar Registros':
                return buscarRegistro(respuestaBDD);
                break;
            case '5.- Salir':
                break;
        }
    });
}
;
function ejecutarRespuesta() {
    return map(// Respuesta del anterior OBS
    (respuestaBDD) => {
        const opcion = respuestaBDD.opcionMenu.opcionMenu;
        switch (opcion) {
            case '1.- Registrar':
                const usuario = respuestaBDD.usuario;
                respuestaBDD.bdd.usuarios.push(usuario);
                return respuestaBDD;
            case '2.- Eliminar Registros':
                const registrosFiltrados = respuestaBDD.usuario;
                respuestaBDD.bdd.usuarios = registrosFiltrados; //Array
                return respuestaBDD;
            case '3.- Actualizar Registros':
                const indice = respuestaBDD.indiceUsuario;
                respuestaBDD.bdd.usuarios[indice].nombre = respuestaBDD.usuario.nombre; //Objeoto
                return respuestaBDD;
            case '4.- Buscar Registros':
                const registroEncontrado = respuestaBDD.usuario;
                console.log(registroEncontrado);
                return respuestaBDD;
            case '5.- Salir':
                break;
        }
    });
}
;
function ingresarRegistro(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaRegistroUsuario))
        .pipe(map((usuario) => {
        respuestaBDD.usuario = usuario;
        return respuestaBDD;
    }));
}
;
function eliminarRegistro(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaIdRegistro))
        .pipe(map((respuesta) => {
        const usuariosFiltrados = respuestaBDD.bdd
            .usuarios
            .filter(// -1
        (usuario) => {
            return usuario.id !== respuesta.idRegistro;
        });
        respuestaBDD.usuario = usuariosFiltrados;
        return respuestaBDD;
    }));
}
;
function buscarRegistro(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaIdRegistro))
        .pipe(map((respuesta) => {
        const usuarioFiltrado = respuestaBDD.bdd
            .usuarios
            .filter(// -1
        (usuario) => {
            return usuario.id == respuesta.idRegistro;
        });
        respuestaBDD.usuario = usuarioFiltrado;
        return respuestaBDD;
    }));
}
;
function actualizarRegistro(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaIdRegistro))
        .pipe(mergeMap(// RESP ANT OBS
    (respuesta) => {
        const indiceUsuario = respuestaBDD.bdd
            .usuarios
            .findIndex(// -1
        (usuario) => {
            return usuario.id === respuesta.idRegistro;
        });
        respuestaBDD.indiceUsuario = indiceUsuario;
        return rxjs
            .from(inquirer.prompt(preguntaEdicionUsuario))
            .pipe(map((nombre) => {
            respuestaBDD.usuario = {
                id: null,
                nombre: nombre.nombre
            };
            return respuestaBDD;
        }));
    }));
}
;
function leerBDD() {
    // @ts-ignore
    return new Promise((resolve) => {
        fs.readFile('bdd.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
function crearBDD() {
    const contenido = '{"usuarios":[],"mascotas":[]}';
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.writeFile('bdd.json', contenido, (error) => {
            if (error) {
                reject({
                    mensaje: 'Error creando bdd',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD creada',
                    bdd: JSON.parse(contenido)
                });
            }
        });
    });
}
function guardarBDD(bdd) {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.writeFile('bdd.json', JSON.stringify(bdd, null, 2), (err) => {
            if (err) {
                reject({
                    //: 'Error guardando la BDD',
                    error: 500
                });
            }
            else {
                resolve({
                    //mensaje: 'BDD guardada',
                    bdd
                });
            }
        });
    });
}
function actualizarBDD() {
    return mergeMap((respuesta) => {
        return rxjs.from(guardarBDD(respuesta.bdd));
    });
}
;
function desplegarOpcionesMenu() {
    return mergeMap((respuesta) => {
        return rxjs
            .from(inquirer.prompt(preguntaMenu))
            .pipe(map((opcionMenu) => {
            respuesta.opcionMenu = opcionMenu;
            return respuesta;
        }));
    });
}
;
function inicializarBase() {
    const bddLeida$ = rxjs.from(leerBDD());
    return bddLeida$
        .pipe(mergeMap(// Respuesta anterior Observable
    (respuestaBDD) => {
        if (respuestaBDD.bdd) {
            return rxjs
                .of(respuestaBDD);
        }
        else {
            // crear la base
            return rxjs
                .from(crearBDD());
        }
    }));
}
;
main();
