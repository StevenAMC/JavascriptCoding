//* Areglo es un tipo object que nos permite almacenar varios valores en una sola variable
//* Los arreglos son objetos, por lo tanto, son dinamicos

//* Declaracion de un arreglo
//? let autos = new Array("BMW", "Mercedes Benz", "Volvo");
//? console.log(autos);
const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);

console.log( autos[0]);
console.log( autos[1]);
console.log( autos[2]);

for (let i = 0; i < autos.length; i++) {
    console.log(i+' : '+autos[i]);
}

autos[1] = "MercedesBenz";
console.log(autos);

autos.push("Audi");
console.log(autos);

console.log(autos.length);
autos[(autos.length)]="Cadillac";
console.log(autos);

autos[6]="Lamborghini";
console.log(autos);

//*Identificar si una variable es un arreglo
console.log(Array.isArray(autos));
console.log(autos instanceof Array);