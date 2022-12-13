"use strict";

//x=10; // Producira error porque x no estaba definido
let x = 10;
console.log(x);

miFuncion();

function miFuncion() {
    "use strict";
    let y = 11;
    //y = 11;
    console.log("Hola");
    }
//miFuncion(); // Producira error porque la funcion no esta definida