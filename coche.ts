class Coche {

    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo: any = null) {
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Genérico";
        } else {
            this.modelo = modelo;
        }
    }

    public getColor() {
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getModelo() {
        return this.modelo;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public acelerar() {
        this.velocidad++;
    }

    public frenar() {
        this.velocidad--;
    }

    public getVelocidad(): number {
        return this.velocidad;
    }
}

var coche = new Coche("Toyota");
coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();

var coche1 = new Coche();
coche1.setColor("VERDE");
var coche2 = new Coche();
coche2.setColor("AZUL");

console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());
console.log("La modelo del coche 1 es: " + coche.getModelo());

console.log("El color del coche 2 es: " + coche1.getColor());
console.log("El color del coche 3 es: " + coche2.getColor());