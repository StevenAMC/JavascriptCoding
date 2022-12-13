//*Funcion constructor de objetos tipo Persona
function Persona(nombre = "Nadie", apellido, email) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
}

let padre = new Persona("Juan", "Perez", "perez@hotmail.com");
console.log(padre);

let madre = new Persona("Maria", "Carrillo", "lot@mail.com");
console.log(madre);

padre.nombre = "Carlito";
console.log(padre);
console.log(madre);
