const fs = require("fs");

let archivoTareas = {
archivo: "./tareas.json",
leerArchivo: function(){
        const tareasJason = (fs.readFileSync(this.archivo, "utf-8"));
        let tareas = JSON.parse(tareasJason);
        return tareas;
},
escribirJSON: function(tareas){
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, " "));
},
guardarTarea: function(tarea){
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas);
},
filtrarPorEstado: function(estado){
        let tareas = this.leerArchivo();
        let tareasFiltradas = tareas.filter((tarea) => {
                return tarea.estado === estado});
                return tareasFiltradas;
        },


}
module.exports = archivoTareas;