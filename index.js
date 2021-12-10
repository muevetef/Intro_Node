const { animales: mascotas, color } = require("./animales.js");
const cowsay = require("cowsay");
const Persona = require("./Persona");

const persona1 = new Persona("Joselito", 60);
console.log(persona1.saludar());

console.log(mascotas, color);

console.log(
  cowsay.say({
    text: "Soy un Mooooodulo!!!",
    e: "Oo",
    T: "U",
  })
);
