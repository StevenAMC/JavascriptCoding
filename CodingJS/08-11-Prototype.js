const { withScopeId } = require("vue");

//*Funcion constructor de objetos tipo Persona
function Persona(nombre = "Nadie", apellido, email) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.nombreCompleto = function () {
		return this.nombre + " " + this.apellido;
	};
};

Persona.prototype.tel = "77788899";

let padre = new Persona("Juan", "Perez", "perez@hotmail.com");
console.log(padre);
padre.tel = "11223355"
console.log(padre.tel)
console.log(padre.nombreCompleto());

let madre = new Persona("Maria", "Carrillo", "lot@mail.com");
console.log(madre);
console.log(madre.nombreCompleto());
console.log(madre.tel)