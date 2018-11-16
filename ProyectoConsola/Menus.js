//MENUS

module.exports.menuInicio = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Bienvenido al Sistema de Adopción de Perros',
    choices: [
        '1.- Ingresar como Usuario Registrado',
        '2.- Registrar Nuevo Usuario',
        '3.- Salir',
    ]
};

module.exports.inicioUsuarioParticipante = {
    type: 'list',
    name: 'menuUsuarioRegistrado2',
    message: 'Bienvenido ...',
    choices: [
        '1.- Adoptar Mascota',
        '2.- Listar mis Mascotas Adoptadas',
        '3,- Salir',
    ]
};

module.exports.queDatoUsuario = {
    type: 'list',
    name: 'queDatoUsuario',
    message: 'QueDatoQuieresActualizar',
    choices: [
        '1.- Id',
        '2.- Nombre',
        '3,- Tipo Usuario',
    ]
};


module.exports.inicioUsuarioAdministrador = {
    type: 'list',
    name: 'menuUsuarioRegistrado',
    message: 'Bienvenido al Sistema de Adopcion de Perros',
    choices: [
        '1.- Registrar',
        '2.- Eliminar Registros',
        '3.- Actualizar Registros',
        '4.- Listar Registros',
        '5.- Adoptar Mascota',,
        '6.- Salir',
    ],
    default: 0
};

module.exports.preguntaTipoRegistro = {
    type: 'list',
    name: 'tipoRegistro',
    message: 'Que tipo de registro?',
    choices: [
        '1.- De Usuario',
        '2.- De Mascota',
        '3.- Salir',
    ]
};



module.exports.registroUsuario = [
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

module.exports.registroPerro = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es el id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es el nombre'
    },
    {
        name: 'estado.nombreEstado',
        message: 'Estado:'
    },
    {
        name: 'estado.idAdoptor',
        message: ':'
    },
];

module.exports.ingresoUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Ingresa tu id:'
    },
];

module.exports.preguntaEliminarRegistro = [
    {
        type: 'input',
        name: 'id',
        message: 'Ingresa el id del registro que deseas eliminar'
    },
];

module.exports.preguntaAdoptar = [

    {
        type: 'input',
        name: 'idUsuario',
        message: 'Ingresa tu id:'
    },
    {
        type: 'input',
        name: 'idMascota',
        message: 'Ingresa el id de la mascota que deseas adoptar'
    },
];

module.exports.preguntarId = [
    {
        type: 'input',
        name: 'id',
        message: 'Ingresa el id:'
    },
];

module.exports.preguntaActualizarUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Nuevo id:'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Nuevo nombre:'
    },
    {
        type: 'input',
        name: 'tipo',
        message: 'Nuevo tipo Usuario:'
    },
];


