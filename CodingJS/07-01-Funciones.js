//* Hoisting: se define en cualquier parte del código
miFuncion(4, 2);

//* Declaración de funciones
function miFuncion(a, b) {
	console.log("Suma: " + (a + b));
	return a + b;
}
//* Llamada a la función
miFuncion(3, 2);
miFuncion(3, 2);
let resultado = miFuncion(3, 2);
console.log(resultado);

//* Declaración de función de tipo EXPRESIÓN.
let sumar = function (a, b) {
	return a + b;
};

resultado = sumar(3, 3);
console.log(resultado);
