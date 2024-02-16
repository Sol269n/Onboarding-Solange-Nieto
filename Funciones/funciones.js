// Nivel bajo

//EJ 1 y 2:

let numero1 = 100
let numero2 = 20

/*
function agregar(parametro1, parametro2){
    let resultado = parametro1 + parametro2

    return resultado
}
let resultado = agregar(numero1, numero2)

console.log(resultado)
*/

let resultado = (function(parametro1, parametro2){
    let resultado = parametro1 + parametro2
    return resultado
})(numero1, numero2)

console.log(resultado)

//Nivel medio:

//EJ 1:

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}
saludar("Sol")

//EJ 2:

let multiplicacion = function(parametro1, parametro2){
    return parametro1 * parametro2
}
let valor1 = 5
let valor2 = 10

let resultadoMultiplicacion = multiplicacion(valor1, valor2)
console.log(resultadoMultiplicacion)

//EJ 3: 

function area(base, altura){
    let areaTriangulo = (base * altura) / 2
    return areaTriangulo
}
let baseTriangulo = 5
let alturaTriangulo = 8
let areaResultado = area(baseTriangulo, alturaTriangulo)
console.log("El area del triangulo es:", areaResultado)

//EJ 4:

function perimetro(lado1, lado2, lado3){
    let perimetroTriangulo = lado1 + lado2 + lado3
    return perimetroTriangulo
}
let lado1Triangulo = 3
let lado2Triangulo = 4
let lado3Triangulo = 5
let perimetroResultado = perimetro(lado1Triangulo, lado2Triangulo, lado3Triangulo)
console.log("El perimetro del triangulo es:", perimetroResultado)

//EJ 5:

function precioTotalProducto(precio, cantidad){
    let precioTotal = precio * cantidad

    if (cantidad >= 20){
        precioTotal *= 0.8
    }else if(cantidad >= 10){
        precioTotal *= 0.9
    }
    return precioTotal;
}
let precio = 10
let cantidad = 5

let precio2 = 20
let cantidad2 = 15

console.log("Precio total:", precioTotalProducto(precio, cantidad))
console.log("Precio total 2:", precioTotalProducto(precio2, cantidad2))

//EJ 6:

function isAnAdult(edad){
    if (edad >= 18){
        return "Eres mayor de edad"
    }else{
        return "No eres adulto"
    }
}

console.log(isAnAdult(20)) 
console.log(isAnAdult(15))
console.log(isAnAdult(18))

//Nivel alto

//EJ 1:

function calcularImpuesto(ingresoAnual){
    let impuesto
    if (ingresoAnual <= 10000){
        impuesto = ingresoAnual * 0.1
    }else if (ingresoAnual <= 20000){
        impuesto = ingresoAnual * 0.15
    }else{
        impuesto = ingresoAnual * 0.2
    }
    return impuesto
}
console.log("Impuesto a pagar:", calcularImpuesto(8000))

//EJ 2:

function verificarDia(numeroDia){
    let mensaje

    switch (numeroDia){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es un día hábil"
            break;
        case 6:
        case 7:
            mensaje = "Es fin de semana"
            break;
        default:
            mensaje = "Número de día inválido"
    }

    return mensaje
}
console.log(verificarDia(1))
console.log(verificarDia(6))

//EJ 3:

function solicitarInformacionPersonal(){
    let informacionPersonal = {}

    let nombre = prompt("Por favor, ingresa tu nombre:")
    if (!nombre) {
        console.error("El nombre no puede estar vacío")
        return
    }
    informacionPersonal.nombre = nombre

    let apellido = prompt("Por favor, ingresa tu apellido:")
    if (!apellido) {
        console.error("El apellido no puede estar vacío")
        return
    }
    informacionPersonal.apellido = apellido

    let edad = prompt("Por favor, ingresa tu edad:")
    if (isNaN(edad) || edad === '' || edad <= 0) {
        console.error("La edad ingresada no es válida")
        return
    }
    informacionPersonal.edad = Number(edad)

    console.log("Información personal:")
    console.log(informacionPersonal)
}
solicitarInformacionPersonal()


//EJ 4:

function saludo(nombre){
    return `Hola, mi nombre es ${nombre}`
}

function calcularAge(añoNacimiento, añoActual){
    return añoActual - añoNacimiento
}

function presentacion(){
    let nombre = prompt("Por favor, ingresa tu nombre:")
    let añoNacimiento = prompt("Por favor, ingresa tu año de nacimiento:")
    let añoActual = new Date().getFullYear()
    let edad = calcularAge(Number(añoNacimiento), añoActual)
    let mensajeSaludo = saludo(nombre)
    let mensajeEdad = `Tienes ${edad} años`

    console.log(`${mensajeSaludo}. ${mensajeEdad}`)
}
presentacion()
