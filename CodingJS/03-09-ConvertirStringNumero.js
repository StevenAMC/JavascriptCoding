let miNumero =  "20";

//*console.log(typeof miNumero);

let edad = Number(miNumero);//*Función number() convierte string a número
//*console.log(typeof edad);
if (edad > 18) {
    console.log("Puede votar");
}
else {
    console.log("No puede votar");
}

let resultado = edad > 18 ? "Puede votar" : "Muy joven para votar";
console.log(resultado);
