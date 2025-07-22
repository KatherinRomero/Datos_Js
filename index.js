// string
var nombre = "Kathe";
console.log(nombre);
console.log(typeof nombre);

// number
var numero = 20;
console.log(numero);

// objeto
var objecto = {
    nombre: "Kathe",
    edad: 20,
    ciudad: "Bogotá"
};
console.log(objecto);

// boolean
var booleano = true;
console.log(booleano);

// class / function
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// undefined
var x;
console.log(x);

// array
var colores = ["rojo", "verde", "azul"];
console.log(colores);

// concatenación
var saludo = "Hola mi nombre es " + nombre + " tengo " + numero + " años";
console.log(saludo);

// let
let apellido = "Romero";
console.log(apellido);

// const
const pi = 3.14;
console.log(pi);