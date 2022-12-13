let a = 5;
let valMin = 0,
	valMax = 2;
//*Doble appersand para evaluar si es verdadero
if (a >= valMin && a <= valMax) {
	console.log("Dentro de rango");
} else {
	console.log("Fuera de rango");
}

//*Operador lógico OR(||) regresa verdadero si al menos una de las condiciones es verdadera:
let vacaciones = false, diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log("Padre puede asistir al juego del hijo");
} else {
    console.log("El padre está ocupado");
}

