//*Tipo de dato String
/*
 *Ejemplos de tipos de datos en JavaScript
 */
var nombre = "Hans";
var nombre2 = "Carlos";
var nombreman = "Steven";

console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);

console.log("Hola Mundo desde JavaScript");
console.log(nombre2);
var numero = 1000;
//*Tipo de dato numérico
console.log(numero);

//*Tipo de dato Object
var objeto = {
	nombre: "Juaneco",
	apellido: "Perez",
	telefono: "442-1210",
};
console.log(objeto);
console.log(typeof objeto);

//*Tipo de dato Boolean(true,false):
var bandera = true || false;
console.log(bandera);
console.log(typeof bandera);

//*Tipo de dato función:
function miFuncion() {}
console.log(typeof miFuncion);
console.log(miFuncion);

//*Tipo de dato Symbol:
var simbolo = Symbol("mi simbolo");
console.log(typeof bandera);
console.log(bandera);

//*Tipo clase es una funcion:
class Persona {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
	}
}
console.log(typeof Persona);
console.log(Persona);

//*Tipo de dato undefined: (es valor y tipo de dato)
var x;
console.log(typeof x);
x = undefined;
console.log(x);

//*null : ausencia de valor
var y = null;
console.log(typeof y);
console.log(y);

//*Arreglo:
var autos = ['BMW','AUDI','VOLVO'];
console.log(autos);
console.log(typeof autos);//*Los arreglos son objetos, no nuevo tipo de dato

//*Vacios:
var z = '';
console.log(typeof z);
console.log(z);