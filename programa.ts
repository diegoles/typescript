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