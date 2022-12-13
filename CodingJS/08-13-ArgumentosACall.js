let persona1={
    nombre:'Juaneco',
    apellido:'Perico',
    nombreCompleto: function(titulo,tel){
        return  titulo+': '+this.apellido+' '+this.nombre+' '+tel;
    }
}
let persona2={
    nombre:'Carlos',
    apellido:'Lara',

}

//*USo de call para utilizar el metodo persona1.nombreCompleto
//*En los datos del objeto persona 2
console.log(persona1.nombreCompleto('Lic.','9982222'))
console.log(persona1.nombreCompleto.call(persona2,'Ing','4421210'));
