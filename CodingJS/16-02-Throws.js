"use strict";
try {
    let x = 10;
	
    //*miFuncion()
    throw 'Mi error'
    console.log("Continuamos...")
} catch (error){
	console.log("Error")
    console.log(error)
}
finally {
    console.log("Finalmente")
    console.log("Termina la revisión de errores")
}

console.log("Fin del programa")

let resultado = "-1"
try {
    if (resultado == "") throw "Es cadena vacía"
    else if(isNaN(resultado)) throw "No es un número"
    else if(resultado<0) throw "Es valor negativo"
}
catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}
finally {
    console.log("Finalmente")
    console.log("Termina la revisión de errores")
}