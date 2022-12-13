function miFuncion() {
    console.log(arguments.length);
    console.log("Hola Mundo");
}
//* Auto call
(function(a,b){
    console.log('Self Invoking Function');
    console.log('Result: ', a+b);
})(3,4);

//* Tipo de dato function
console.log(typeof miFuncion);
miFuncion();

//* FUNCIONES COMO OBJETOS:
//* Funcion puede describirse como objeto
//* tiene propiedades y métodos

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


(function(){
    console.log('Self Invoking Function');
    console.log('Result: auto');
})();
function aea(){
    console.log('Result: auto');
}