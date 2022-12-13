//! No es posible crear objetos antes de declarar la clase
//! let persona3 = new Persona('Juan', 'Perez');
class Persona {
	constructor(nombre, apellido) {
		this._nombre = nombre;
		this._apellido = apellido;
	}
	get nombre() {
		return this._nombre;
	}
	set nombre(nombre) {
		this._nombre = nombre;
	}
}
let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);

console.log(persona1._apellido);
console.log(persona1.nombre);
console.log(persona1._nombre);
persona1.nombre = "Romeo"; //* set nombre('Romeo') se ejecuta
//* HOISTING NO S APLICA A CLASES, PRIMERO SE DEBEN CREAR LAS CLASES Y LUEGO INSTANCIARLAS
//* No como funciones

