let persona1={
    nombre:'Juaneco',
    apellido:'Perico',
    nombreCompleto: function(titulo,tel){
        //return this.nombre+' '+this.apellido;
        return  titulo+': '+this.apellido+' '+this.nombre+' '+tel;
    }
}
let persona2={
    nombre:'Carlos',
    apellido:'Lara',

}

//*USo de Apply para utilizar el metodo persona1.nombreCompleto
//*En los datos del objeto persona 2
console.log(persona1.nombreCompleto('Lic','55512667'));
let arreglo = ['Lic','55512667'];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));
