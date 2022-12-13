class Persona {
	//*extends Object
	static contadorObjetosPersona = 0;

	constructor(nombre, apellido) {
		this._nombre = nombre;
		this._apellido = apellido;
		Persona.contadorObjetosPersona++;
		console.log("Se incrementa contador:", Persona.contadorObjetosPersona);
	}
	get nombre() {
		return this._nombre;
	}
	set nombre(nombre) {
		this._nombre = nombre;
	}
	get apellido() {
		return this._apellido;
	}
	set apellido(apellido) {
		this._apellido = apellido;
	}
	nombreCompleto() {
		return this._nombre + " " + this._apellido;
	}
	//* Sobreescritura del método de la clase padre (Object)
	toString() {
		//* Se aplica polimorfismo (multiples formas en tiempo de ejecución)
		//* el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
		return this.nombreCompleto();
	}
	static saludar() {
		console.log("Saludos desde método static");
	}
	static saludar2(persona) {
		console.log(persona.nombre + " " + persona.apellido);
	}
}
class Empleado extends Persona {
	//* Una nueva sola clase
	constructor(nombre, apellido, departamento) {
		super(nombre, apellido); //* Pasar valores a clase padre para inicializar correctamente clase padre e hija
		this._departamento = departamento;
	}
	get departamento() {
		return this._departamento;
	}
	set departamento(departamento) {
		this._departamento = departamento;
	}
	//* Sobreescritura: Sobreescribir un método de la clase padre
	nombreCompleto() {
		//*return this._nombre+' '+this._apellido+', '+this.departamento;
		//*super.nombreCompleto(); //* Llamar al método de la clase padre
		return super.nombreCompleto() + ", " + this.departamento;
	}
	toString() {
		return super.toString() + ", " + this.departamento;
	}
}
let persona1 = new Persona("Juan", "Perez");
console.log(persona1);
//!persona1.saludar();
Persona.saludar();
Persona.saludar2(persona1);

let empleado1 = new Empleado("Carlos", "Lara", "Sistemas");

Empleado.saludar();
Empleado.saludar2(empleado1);
//* Se usan desde las clases
//* Metodos estaticos: Métodos que se asocian con nuestra clase

console.log(persona1.contadorObjetosPersona);
let empleado2 = new Empleado("Carlos", "Lara", "Sistemas");

console.log(Persona.contadorObjetosPersona);
//* Clases hijas heredan también los atributos y métodos estáticos
console.log(Empleado.contadorObjetosPersona);
