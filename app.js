const argv = require('./config/yargs').argv;

const porHacer = require('./to-do/todo');

const colors = require('colors');


// console.log(argv);

const comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=======Tarea por hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );
        console.log(actualizado);
        
        break;
    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion );
        console.log(borrado);
        
        break;
    default:
        console.log('Comando no conocido');

}
