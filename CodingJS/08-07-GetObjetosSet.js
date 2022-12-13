const persona = {
	nombre: "sapo",
	apellido: "peje",
	email: "anfi@hotmail.com",
	edad: 75,
	idioma:'Es_MX',
	get lang(){
		return this.idioma.toUpperCase();
	},
	set lang(lang){
		this.idioma=lang.toUpperCase();
	},
	get nombreCompleto(){
		return this.apellido + " " + this.nombre;
	}

};
console.log(persona.nombreCompleto);
console.log(persona.lang)
persona.lang = 'ru_chi';
console.log(persona.lang)
console.log(persona.idioma)
