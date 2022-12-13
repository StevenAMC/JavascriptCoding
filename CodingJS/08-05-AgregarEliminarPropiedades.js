const persona = {
	nombre: "sapo",
	apellido: "peje",
	email: "anfi@hotmail.com",
	edad: 75,
	nombreCompleto: function () {
		return this.apellido + " " + this.nombre;
	}    
};
console.log(persona.nombre);
console.log(persona['apellido']);

//*for in: recorres propiedades del objeto
for(nombrePropiedad in persona){
	console.log(nombrePropiedad);
	console.log(persona[nombrePropiedad]);
}

persona.tel = '4421210';
persona.tel = '5521220';
console.log(persona);

delete persona.tel;
console.log(persona);
