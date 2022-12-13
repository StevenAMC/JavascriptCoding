let persona1={
    nombre:'Juaneco',
    apellido:'Perico',
    nombreCompleto: function(){
        return this.apellido+' '+this.nombre;
    }
}
let persona2={
    nombre:'Carlos',
    apellido:'Lara',

}

//*USo de call para utilizar el metodo persona1.nombreCompleto
//*En los datos del objeto persona 2
console.log(persona1.nombreCompleto())
console.log(persona1.nombreCompleto.call(persona2));
