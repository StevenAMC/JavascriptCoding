const persona = {
	nombre: "sapo",
	apellido: "peje",
	email: "anfi@hotmail.com",
	edad: 75,
	nombreCompleto: function () {
		return this.apellido + " " + this.nombre;
	}    
};
console.log(persona.nombreCompleto())
