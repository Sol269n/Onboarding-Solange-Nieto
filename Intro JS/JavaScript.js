// Level Low

let myName = "Sol"
console.log(myName)

let myLastName = "Nieto"
let myAge = 20
let myPet = "Maki"
let petAge = 4

let fullName = myName + " " + myLastName

let presentationText = myName + " " + myLastName + " " + myAge + " " + myPet + " " + petAge + " " + fullName

console.log(presentationText)

// Level Medium

let sumAge = myAge + petAge
let restAge = myAge - petAge
let productAge = myAge * petAge
let diviaionAge = myAge / petAge

console.log(sumAge, restAge, productAge, diviaionAge)

const estudiante = {
    nombre: "Camila",
    apellido: "Plantes",
    edad: 21,
    genero: "Femenino",
    profesor: false,
}

console.log("Datos de estudiante:", estudiante)
console.log("Alumno:", estudiante.nombre, estudiante.apellido)
console.log("Edad:", estudiante.edad)
console.log("Genero:", estudiante.genero)
console.log("¿Es profesor?:", estudiante.profesor)

const pet = {
    nombre: "Maki",
    edad: 4,
    color: "naranja colorado",
    castrado: false,
    vacunas: true,
}

console.log("Datos de la mascota:", pet)
console.log("Nombre:", pet.nombre)
console.log("Edad:", pet.edad)
console.log("Color:", pet.color)
console.log("Esterilizado:", pet.castrado)
console.log("Vacunas:", pet.vacunas)


const frutas = [ "Manzana", "Banana", "Uva", "Pera", "Sandia"]

console.log("Listaa de frutas:", frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

// Level Higth

let number_edad = prompt("Ingrese su edad:")

let IamAdult = number_edad >= 18;

if (IamAdult) {
    console.log("Soy adulto", IamAdult)
} else{
    console.log("No soy adulto, tengo:", number_edad)
}
////
const numeros = [10, 20, 30, 40, 50]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

////

const familia = [
    {
        cocina: {
            papelCocina: "Papel de cocina"}
    },
    {
        cuarto:{ bolsas: "bolsas de basura"}
    },
    {
        mascota:{
            comidaMaki: "comida de gato"}
    },
    {
        jardin:{ abono: "abono para plantas"}
    },
    {
        baño: {papel: "Papel de baño", shampoo: "Shampoo", jabon: "Jabon", cotonetes:"Cotonetes", pastaDental: "Pasta dental"}
    }
    ];

console.log(familia)

console.log(familia[0].cocina)
console.log(familia[1].cuarto)
console.log(familia[2].mascota)
console.log(familia[3].jardin)
console.log(familia[4].baño)

///////

let randomText = frutas[1] + " " + numeros[3] + " " + familia[4].baño.jabon
console.log(randomText)



