//*Declaracion de la funcion de tipo expresion
let sumar = function (a, b) {
	return a + b;
};
resultado = sumar(3, 3);

console.log(resultado);

//* Funcion de tipo expresion utlizando la sintaxis de funcion flecha
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(99, 7880);
console.log(resultado);

//* parametros variables al momento de definir
//* argumentos son los valores q se asignan a una funcion

let sumar2 = function (a = 4, b = 5) {
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
	return a + b + arguments[2];
};

resultado = sumar2(1, 2, 5);
console.log(resultado);
