class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo.departamento);
    }
    else if (tipo instanceof Empleado){
        console.log("Es un objeto de tipo Empleado");
        console.log(tipo.departamento);
    }
    else if (tipo instanceof Object){
        console.log("Es un objeto de tipo Object");
    }
}

let empleado1 = new Empleado('Juan', 3000);

console.log(empleado1.obtenerDetalles());
determinarTipo(empleado1);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

console.log(gerente1.obtenerDetalles());
determinarTipo(gerente1);
