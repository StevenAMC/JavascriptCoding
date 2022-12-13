const { withScopeId } = require("vue");

//*Funcion constructor de objetos tipo Persona
function Persona(nombre = "Nadie", apellido, email) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Juan", "Perez", "perez@hotmail.com");
console.log(padre);
console.log(padre.nombreCompleto())

let madre = new Persona("Maria", "Carrillo", "lot@mail.com");
console.log(madre);
console.log(madre.nombreCompleto())

padre.nombre = "Carlito";
console.log(padre);
console.log(madre);

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(true);
let miBoolean2 = true;

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};
