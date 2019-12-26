function holaMundo(nombre) {
    return "Hola mundo!! soy " + nombre;
}

var nombre = "Edgar Diaz";
var resultado = holaMundo(nombre);

var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;

//Varibles y tipos
var nombre: string = "Edgar";
var edad: number = 30;
var programador: boolean = true;
var lenguajes: Array<string> = ["JAVA", "JavaScript", "Angular"];

var nombre2: any = "Edgar2";
nombre2 = 12;

etiqueta.innerHTML = nombre + " - " + edad;

//alert("Hola mundo Alert" + nombre2);

var a = 7;
var b = 12;
if (a === 7) {
    let a = 4;
    var b = 1;
    console.log("Dentro del if :" + a + " - " + b);
}

console.log("Fuera del if :" + a + " - " + b);

function devuelveNumero(num:number):string{
    return "Numero devuelto: " + num;

}

function devuelveString(texto:string):number{
    if (texto =="hola") {
        var num = 66;
    } else {
        var num = 99;
    }
    return num;

}


alert(devuelveNumero(34));
alert(devuelveString("hola"));


