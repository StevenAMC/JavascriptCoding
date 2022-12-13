class Persona {
	//*extends Object
	//* Atributo de clase
	static contadorPersonas = 0; //*Atributo de nuestra clase

	static get MAX_OBJETOS() {
		return 5;
	}

	constructor(nombre, apellido) {
		this._nombre = nombre;
		this._apellido = apellido;
		if (Persona.contadorPersonas < Persona.MAX_OBJETOS) {
			this.IDpersona = ++Persona.contadorPersonas;
		}else{
            console.log("Se ha superado el máximo de objetos permitidos");
        }
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
		return this.IDpersona + " " + this._nombre + " " + this._apellido;
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
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString());

let empleado1 = new Empleado("Karla", "Perez", "Sistemas");
console.log(empleado1.toString());

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJETOS);
Persona.MAX_OBJETOS = 10; //* No se puede modificar el valor de una constante
console.log(Persona.MAX_OBJETOS);

let persona3 = new Persona('Armando','Paredes');
let persona4 = new Persona('Peje','Sapo');
let persona5 = new Persona('Dina','Mita');
console.log(persona4.toString())
console.log(persona5.toString())