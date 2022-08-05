let archivoTareas = require("./funcionesDetareas");
    
const accion = process.argv[2];

    switch(accion){
        case "listar": {
            console.log('Listado de tareas');
            console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((tarea, index) => {
            console.log((index + 1) +'---' + tarea.titulo + ' - ' + tarea.estado)});
        };
        console.log()
        break;
            
        case "crear": {
            console.log();
            console.log("nueva tarea creada");
            console.log("------------------");

            let titulo = process.argv[3];
            let tarea = {
                titulo: titulo,
                estado: "pendiente",
            }
            archivoTareas.guardarTarea(tarea);

            console.log(tarea.titulo + " => "  + tarea.estado);
            console.log();
        break;  
        }
    case 'filtrar':
        let estado = process.argv[3];
        console.log();
        console.log('Tareas ' + estado);
        console.log('------------------');
        let filtradas = archivoTareas.filtrarPorEstado(estado);
        filtradas.forEach((tarea, index) => {
            console.log((index + 1) +'. ' + tarea.titulo);
        });
        console.log('');
        break;         
        case undefined: {
            console.log("atención tienes que pasar una acción");
            console.log('las acciones disponibles son: listar');
            console.log('------------------------------------');
            break;
        }
        default: {
            console.log("No entiendo que quieres hacer")
            console.log('las acciones disponibles son: listar');
            console.log('------------------------------------');
        };      
    }
