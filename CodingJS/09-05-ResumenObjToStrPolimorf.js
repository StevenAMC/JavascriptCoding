

class Persona { //*extends Object
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
    //* Sobreescritura del método de la clase padre (Object)
    toString(){
        //* Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        //* el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
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
    toString(){
        return super.toString()+', '+this.departamento;
    }

}

let emp1 = new Empleado("Juan", "Perez", "Sistemas");
console.log(emp1.toString());