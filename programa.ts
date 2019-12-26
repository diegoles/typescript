class Programa {
    public nombre: string;
    public version: number;

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getVersion() {
        return this.version;
    }

    setVersion(version: number) {
        this.version = version;
    }
}

class EditorVideo extends Programa{
    public timeLine: number;

    getTimeLine() {
        return this.timeLine;
    }

    setTimeLine(timeLine: number) {
        this.timeLine = timeLine;

    }

    getAllData():string{
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    }
}

var editor = new EditorVideo();
editor.setNombre("Castania Studio");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log(editor.getAllData());



//Logica del formulario

var programas = [];

function guardar(){
    var nombre = (<HTMLInputElement> document.getElementById("nombre")).value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);

    programas.push(programa);

    var list = "";
    for(var i=0; i<programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;

    (<HTMLInputElement> document.getElementById("nombre")).value = "";
}