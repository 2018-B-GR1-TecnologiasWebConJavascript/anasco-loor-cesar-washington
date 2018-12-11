//FUNCIONES

const fs = require('fs');

module.exports.registrarUsuario = (usuario) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        bdd.usuarios.push(usuario);
                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd,null, 2),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Registrado Exitosamente'});
                                }
                            }
                        );
                    }
                });
        }
    );
};

module.exports.registrarMascota = (perro) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        //perro.appendData("estado: {nombreEstado:'',idAdoptor''}");
                        //console.log(perro.type);
                        bdd.mascotas.push(perro);
                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd,null, 2),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Mascota Registrada Exitosamente'});
                                }
                            }
                        );
                    }
                });
        }
    );
};


module.exports.Lectura = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
                        reject(err);
                        console.log('err')
                    } else {
                        resolve(contenidoLeidoDelArchivo)
                    }

                }
            )
        }
    )
};

module.exports.eliminarUsuario = (registro) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (!err) {
                        const bdd = JSON.parse(contenido);
                        const usuarios = bdd.usuarios;
                        bdd.usuarios = usuarios
                            .filter(
                                (user) => {
                                    return user.id !== registro;
                                }
                            );
                        //console.log(bdd.usuarios);
                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd, null, 2),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Eliminado Exitosamente'});
                                }
                            }
                        );
                    } else {
                        reject({mensaje: 'Error leyendo'});
                    }
                });
        }
    );
};

module.exports.eliminarMascota = (registro) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (!err) {
                        const bdd = JSON.parse(contenido);
                        const usuarios = bdd.mascotas;
                        bdd.mascotas = usuarios
                            .filter(
                                (user) => {
                                    return user.id !== registro;
                                }
                            );
                        //console.log(bdd.mascotas);
                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd, null, 2),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Mascota Eliminada Exitosamente'});
                                }
                            }
                        );
                    } else {
                        reject({mensaje: 'Error leyendo'});
                    }
                });
        }
    );
};

module.exports.seleccionarUsuario= (registro) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (!err) {
                        const bdd = JSON.parse(contenido);
                        const registroActualizar = bdd.usuarios;
                        bdd.usuarios = registroActualizar
                            .filter(
                                (user) => {
                                    return user.id == registro;
                                }
                            );
                        //resolve(console.log(bdd.usuarios));
                                    resolve(bdd.usuarios);

                    } else {
                        reject({mensaje: 'Error leyendo'});
                    }
                });
        }
    );
};


module.exports.registrarUsuario2 = (usuario) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        bdd.usuarios.push(usuario);
                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd,null, 2),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Registrado Exitosamente'});
                                }
                            }
                        );
                    }
                });
        }
    );
};


