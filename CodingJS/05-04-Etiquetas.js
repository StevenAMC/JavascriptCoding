inicio:
for (let contador = 0; contador <= 10; contador++) {
    if (contador %2 !== 0) {
        continue inicio;//? ir a la siguiente iteracion
    }
    console.log(contador);
}
inicio2:
for (let contador = 0; contador <= 10; contador++) {
    if (contador %2 !== 0) {
        break inicio2;//? ir a la siguiente iteracion
    }
    console.log(contador);
}