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
    get apellido() {
        return this._apellido;
    } 
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
}


class Empleado extends Persona { //* Una nueva sola clase
    constructor(nombre,apellido,departamento) {
        super(nombre,apellido); //* Pasar valores a clase padre para inicializar correctamente clase padre e hija
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    //* Sobreescritura: Sobreescribir un método de la clase padre
    nombreCompleto(){
        //*return this._nombre+' '+this._apellido+', '+this.departamento;
        //*super.nombreCompleto(); //* Llamar al método de la clase padre
        return super.nombreCompleto()+', '+this.departamento;
    }
}
let empleado1 = new Empleado("Juan", "Perez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.apellido);
//* Herencia de métodos
console.log(empleado1.nombreCompleto());
