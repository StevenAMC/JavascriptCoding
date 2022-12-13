let miNumero = "18x";

//*console.log(typeof miNumero);

let edad = Number(miNumero); //*Función number() convierte string a número
console.log(edad);
console.log(typeof edad);

if (isNaN(miNumero)) {
	console.log("No es un número");
} else {
	if (edad > 18) {
		console.log("Puede votar");
	} else {
		console.log("No puede votar");
	}
}

if (isNaN(miNumero)) {
	console.log("No es un número");
} else {
	let resultado = edad > 18 ? "Puede votar" : "Muy joven para votar";
	console.log(resultado);
}
