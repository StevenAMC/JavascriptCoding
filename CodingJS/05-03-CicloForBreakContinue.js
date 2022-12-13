//* variable condicion y aumento
for (let contador = 0,x=0; contador <= 10; contador++) {
    console.log(contador);
    console.log(x);
}
console.log("Fin del ciclo for");

//* Break: rompe el ciclo
for (let contador = 0; contador <= 10; contador++) {
    console.log(contador);
    if (contador === 5) {
        break;
    }
}

//* Continue: salta la iteracion
for (let contador = 0; contador <= 10; contador++) {
    if (contador %2 !== 0) {
        continue;//* ir a la siguiente iteracion
    }
    console.log(contador);
}
