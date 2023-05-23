const numero = (num, num2) => `el numero es: ${num + num2}`;

const resultado = numero(10, 10);
console.log(resultado);
// Ejercicio 2
const mascota = {
  nombreMascota: "Pepe",
  raza: "Perro",
  edad: 5,
  color: "negro",
  vivo: true,
};

console.log(mascota);
console.log(mascota.nombreMascota);

//Destructuring
const { nombreMascota, raza, edad, color, vivo } = mascota;
console.log(nombreMascota, raza, edad, color, vivo);

//Array de objetos
const web = {
  nombre: "Web",
  links: {
    facebook: "https://www.facebook.com/",
  },
  redesSociales: {
    facebook: {
      nombre: "Facebook",
      url: "https://www.facebook.com/",
    },
  },
};

console.log(web.redesSociales.facebook.url)

const {nombre, url} = web.redesSociales.facebook
console.log(nombre)
console.log(url)