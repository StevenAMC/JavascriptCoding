const persona = {
	nombre: "sapo",
	apellido: "peje",
	email: "anfi@hotmail.com",
	edad: 75,
	nombreCompleto: function () {
		return this.apellido + " " + this.nombre;
	}    
};
let persona2 = new Object();
persona2.nombre = "Carlitos";
persona2.dirección = "Ningún Lugar";
persona2.telefono="4421210";
console.log(persona2.telefono);

