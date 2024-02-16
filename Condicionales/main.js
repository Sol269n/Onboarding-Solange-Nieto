// Nivel bajo:


// EJ 1:
let num1 = 4
let num2 = 5
/*
if(num1 > num2){
    console.log(num1)
}else{
    console.log(num2)
}
*/

// EJ 2:

if(num1 > num2){
    console.log(num1);
}else if(num2 > num1){
    console.log(num2);
}else{
    console.log("Los numeros son iguales ", num1, num2);
}

//EJ 3:

if(num1 == num2){
    console.log("Los numeros son iguales. El numero es: ", num1)
}else{
    console.log("Los numeros son diferentes.")
}

//EJ 4:

fecha1 = "2018-9-2"
fecha2 = "2023-7-5"

if(fecha1 > fecha2){
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`)
}else if(fecha1 < fecha2){
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`)
}else{
    console.log("Las fechas son iguales")
}

//EJ 5:

fecha1 = "2023-7-5"

fecha2 = "2023-7-5"

if(fecha1 > fecha2){
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`)
}else if(fecha1 < fecha2){
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`)
}else{
    console.log("Las fechas son iguales")
}

// Nivel medio:

//EJ 1:
 
let color = prompt("Ingrese un color(rojo, azul o verde): ")

switch(color){
    case "rojo":
        console.log(`El color de la pasion`)
        break;
    case "azul":
        console.log(`El color del mar`)
        break;
    case "verde":
        console.log(`El color de la naturaleza`)
        break;
}

//EJ 2:

let numero1 = Number(prompt("Ingrese un numero (numero del 1 al 100): "))
let numero2 = Number(prompt("Ingrese otro numero (numero del 1 al 100): "))

let operaciones = prompt("Ingrese que operacion desea realizar (suma, resta, multiplicacion, division)")

switch (operaciones){
    case "suma":
        suma = numero1 + numero2
        console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
        break;
    case "resta":
        resta = numero1 - numero2
        console.log(`La resta de ${numero1} y ${numero2} es ${resta}`);
        break;
    case "multiplicacion":
        multiplicacion = numero1 * numero2
        console.log(`La multiplicacion de ${numero1} y ${numero2} es ${multiplicacion}`);
        break;
    case "division":
        division = numero1 / numero2
        console.log(`La division de ${numero1} y ${numero2} es ${division}`);
        break;
}

//EJ 3:

const persona1 = {
    nombre: "Franco",
    edad: 21,
    altura: 1.80,
}

const persona2 = {
    nombre: "Karen",
    edad: 22,
    altura: 1.60,
}

console.log("¿Cuál de las dos personas es más alta?")

if (persona1.altura > persona2.altura){
    console.log(`${persona1.nombre} es más alto/a que ${persona2.nombre}`)
}else{
    console.log(`${persona2.nombre} es más alto/a que ${persona1.nombre}`)
}

console.log("¿Cuál es el mayor?")

if (persona1.edad > persona2.edad){
    console.log(`${persona1.nombre} es más mayor que ${persona2.nombre}`)
}else{
    console.log(`${persona2.nombre} es más mayor que ${persona1.nombre}`)
}

//EJ 4:

let nombre = prompt("Ingrese su nombre: ")
let edad = Number(prompt("Ingrese su edad: "))
let altura = parseFloat(prompt("Ingrese su altura: "))
let vision = Number(prompt("Ingrese su estado de vision (del 1 al 10)"))

if (edad >= 18 && altura > 1.10 && vision >= 8) { //puse con float altura para que tome "1.80 cm" en vez de 180
    console.log("Estás calificado para conducir");
} else {
    console.log("No estás calificado para conducir");
}

//EJ 5:

let edades = Number(prompt("Ingrese su edad: "))

if (edades >= 0 && edades <= 10){
    console.log("Eres infantil")
}else if( edades >= 13 && edades <= 18){
    console.log("Eres adolescente")
}else if(edades >= 19 && edades <= 45){
    console.log("Eres joven mayor")
}else if(edades >= 45 && edades <= 100){
    console.log("Eres una persona mayo")
}else if(edades > 100){
    console.log("¿Es realmente tan viejo?")
}else{
    console.log("Edad no valida")
}

//EJ 6:

let ingNumero = Number(prompt("Ingrese un numero del 1 al 3"))

switch(ingNumero){
    case 1:
        console.log("El numero ingresado es: ", ingNumero)
        break;
    case 2:
        console.log("EL doble del numero ingresado es: ", ingNumero * 2)
        break;
    case 3:
        console.log("EL triple del numero ingresado es: ", ingNumero * 3)
        break;
    default:
        console.log("Ese valor no esta permitido")
}


// Nivel alto

let nombre_cliente = prompt("Ingrese su nombre:")
let pase = prompt("Tipo de pase (vip o normal)")
let entrada = prompt("¿Tiene una entrada? (si o no)")

if (nombre_cliente === "Sol" || pase === "vip"){
    console.log("¡Bienvenido, que disfrute de su función!")
    const usarEntrada = prompt("¿Quieres usar tu entrada? (Si o no)")
    if (usarEntrada == "si"){
        console.log("Muy bien, pase señor/a")
    }else{
        console.log("Comprendo, hasta luego.")
    }
}else{
    let comprar = prompt("¿Desea comprar entradas? (si o no)")
    if (comprar == "si"){
        let dinero = Number(prompt("Ingrese su dinero disponible:"))
        if (dinero >= 1000){
            console.log("Venta exitosa. ¡Bienvenido! Disfruta de tu evento.")
        }else{
            console.log("Lo siento, no tienes suficiente dinero para comprar.")
        }
    }else{
        console.log("Comprendo, hasta luego")
    }
}