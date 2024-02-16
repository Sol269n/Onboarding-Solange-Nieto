//Nivel bajo

//EJ 1:

let numero = Number(prompt("Ingrese un número entre 1 y 100:"))

for (let i = numero; i >= 0; i--){
    console.log(i)
}

//EJ 2:

let numeroMult = Number(prompt("Ingrese un número entre 1 y 10:"))

for (let i = 1; i <= 10; i++){
    console.log(`${i}x${numeroMult}=${i * numeroMult}`)
}

//EJ 3:

let suma = 0
let numeros = Number(prompt("Ingrese un número (0 para terminar):"))

while (numeros !== 0){
    suma += numeros
    numeros = Number(prompt("Ingrese otro número (0 para terminar):"))
}

console.log(`La suma de los números ingresados es: ${suma}`)

//EJ 4:

let suma2 = 0;
let numero2;

do {
    numero2 = Number(prompt("Ingrese un número (0 para terminar):"))
    suma2 += numero2
} while (numero2 !== 0);

console.log(`La suma de los números ingresados es: ${suma2}`)


//EJ 5:

let objeto = {
    nombre: "Juan",
    apellido: "Pérez",
    origen: "España",
    estudios: "Ingeniería",
    edad: 30
}

for (let clave in objeto) {
    console.log(clave)
    console.log(objeto[clave])
}

//Nivel medio

//EJ 1:

/*

let numeroSecreto = 4 // Suponiendo que el número secreto es 4
let intentos = 0
let numeroIngresado

do {
    numeroIngresado = Number(prompt("Intenta adivinar el número secreto:"))

    if (numeroIngresado > numeroSecreto) {
        console.log("El número ingresado es mayor que el secreto.")
    } else if (numeroIngresado < numeroSecreto) {
        console.log("El número ingresado es menor que el secreto.")
    }

    intentos++;
} while (numeroIngresado !== numeroSecreto)

console.log(`¡Has acertado! El número secreto era ${numeroSecreto} y has hecho ${intentos} intentos.`)
*/

//EJ 2:

let numero_div = Number(prompt("Ingrese un número para encontrar sus divisores:"))
console.log(`Los divisores de ${numero_div} son:`)

for (let i = 1; i <= numero_div; i++) {
    if (numero_div % i === 0) {
        console.log(i)
    }
}


