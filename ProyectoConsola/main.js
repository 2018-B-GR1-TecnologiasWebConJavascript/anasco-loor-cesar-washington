/*
/   PROTOTIPO PROYECTO EN CONSOLA
*/
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const menus = require('./Menus');
const funciones = require('./Funciones');
const bdd = require('./bdd.json');
const filtro = require('json-filter');
async function usuarioAdmin() {
    try {
        await inicializarBase();
        const respuesta = await inquirer.prompt(menus.inicioUsuarioAdministrador);
        switch (respuesta.menuUsuarioRegistrado) {
            case '1.- Registrar':
                const respuestaUsuario = await inquirer.prompt(menus.preguntaTipoRegistro);
                switch (respuestaUsuario.tipoRegistro) {
                    case '1.- De Usuario':
                        const respuestaUsuarioRegistroUno = await inquirer.prompt(menus.registroUsuario);
                        const respuestaAnadirUsuario = await funciones.registrarUsuario(respuestaUsuarioRegistroUno);
                        console.log(respuestaAnadirUsuario);
                        usuarioAdmin();
                        break;
                    case '2.- De Mascota':
                        const respuestaUsuarioRegistroDos = await inquirer.prompt(menus.registroPerro);
                        const respuestaAnadirMascota = await funciones.registrarMascota(respuestaUsuarioRegistroDos);
                        console.log(respuestaAnadirMascota);
                        usuarioAdmin();
                        break;
                    case '3,- Salir':
                        usuarioAdmin();
                        break;
                }
                ;
                break;
            case '2.- Eliminar Registros':
                const respuestaUsuarioDos = await inquirer.prompt(menus.preguntaTipoRegistro);
                switch (respuestaUsuarioDos.tipoRegistro) {
                    case '1.- De Usuario':
                        const respuestaUsuarioBorrarUno = await inquirer.prompt(menus.preguntaEliminarRegistro);
                        const respuestaEliminarUsuarioUno = await funciones.eliminarUsuario(respuestaUsuarioBorrarUno.id);
                        console.log(respuestaEliminarUsuarioUno);
                        usuarioAdmin();
                        break;
                    case '2.- De Mascota':
                        const respuestaUsuarioBorrarDos = await inquirer.prompt(menus.preguntaEliminarRegistro);
                        const respuestaEliminarUsuarioDos = await funciones.eliminarMascota(respuestaUsuarioBorrarDos.id);
                        console.log(respuestaEliminarUsuarioDos);
                        usuarioAdmin();
                        break;
                    case '3,- Salir':
                        usuarioAdmin();
                        break;
                }
                ;
                break;
            case '3.- Actualizar Registros':
                const respuestaUsuarioTres = await inquirer.prompt(menus.preguntaTipoRegistro);
                switch (respuestaUsuarioTres.tipoRegistro) {
                    case '1.- De Usuario':
                        const respuestaId = await inquirer.prompt(menus.preguntarId);
                        const respuestaActualizarUsuario = await funciones.seleccionarUsuario(respuestaId.id);
                        //const respuesta = await funciones.registrarUsuario();
                        console.log(respuestaActualizarUsuario);
                        const respuestaTipoDato = await inquirer.prompt(menus.queDatoUsuario);
                        //const respuestaActualizarUsuarioDato = await funciones.actualizarUsuario(respuestaId.id);
                        //queDatoUsuario
                        console.log(respuestaTipoDato);
                        usuarioAdmin();
                        break;
                    case '2.- De Mascota':
                        usuarioAdmin();
                        break;
                    case '3,- Salir':
                        usuarioAdmin();
                        break;
                }
                ;
                break;
            case '4.- Listar Registros':
                const leerArchivo$ = rxjs.from(funciones.Lectura('bdd.json')); //Promesa a observable
                leerArchivo$
                    .subscribe(respuesta => {
                    const jsonObjParsed = JSON.parse(respuesta);
                    console.log(jsonObjParsed);
                });
                usuarioAdmin();
                break;
            case '5.- Adoptar Mascota':
                const leerArchivoMascota$ = rxjs.from(funciones.Lectura('bdd.json')); //Promesa a observable
                leerArchivoMascota$
                    .subscribe(respuesta => {
                    const jsonObjParsed = JSON.parse(respuesta);
                    const jsonObjFiltered = (jsonObjParsed.mascotas);
                    console.log(jsonObjFiltered);
                    console.log('INGRESA LOS DATOS:');
                });
                const respuestaUsuarioCuatro = await inquirer.prompt(menus.preguntaAdoptar);
                //var shoppingCart = {};
                //shoppingCart[itemName] = { description: 'This is Item #1' };
                //usuarioAdmin();
                break;
            case '6.- Salir':
                break;
        }
    }
    catch (e) {
        console.log('Hubo un error');
    }
}
;
function inicializarBase() {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                fs.writeFile('bdd.json', '{"usuarios":[],"mascotas":[]}', (err) => {
                    if (err) {
                        reject({ mensaje: 'Error' });
                    }
                    resolve({ mensaje: 'ok' });
                });
            }
            else {
                resolve({ mensaje: 'ok' });
            }
        });
    });
}
;
usuarioAdmin();
