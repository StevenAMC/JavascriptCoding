var nombre = "Juaneco";
var apellido = "Perez";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Gareca";
console.log(nombreCompleto2);

var x = nombre + 219 + 2 + 4; //*Se evalua el tipo de izq a derecha
console.log(x);

var x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);
