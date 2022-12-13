//* Tipos primitivos
let x = 10;
function cambiarValor(a) {
	a = 20;
}
//*Paso por valor
cambiarValor(x);
console.log(x);
//!console.log(a);

const Persona = {
	nombre: "Steven",
	apellido: "Matos",
};

function cambiarValorObjeto(p1) {
	p1.nombre = "Juan";
	p1.apellido = "Valdez";
}
//*Paso por referencia
cambiarValorObjeto(Persona);
console.log(Persona);
