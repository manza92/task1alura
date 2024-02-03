// // let titulo = document.querySelector("h1");
// // titulo.innerHTML = "Hora del Desafío";

// // function botonClicado() {
// //   alert("El boton fue clicado");
// // }

// // function mostrarAlerta() {
// //   let ciudad = prompt("Por favor ingresa el nombre de una ciudad de Brasil:");
// //   alert("Estuve en " + ciudad + " y me acorde de ti");
// // }
// // function mostrarMensaje() {
// //   alert("Amo JS");
// // }

// // function sumaDosNumeros() {
// //   let primerNumero = parseInt(prompt("Dijite el primer número"));
// //   let segundoNumero = parseInt(prompt("Dijite el sengundo número"));
// //   let resultado = primerNumero + segundoNumero;
// //   alert(`${primerNumero} + ${segundoNumero} = ${resultado}`);
// // }


// // function verificarNumero(numero) {
// //   if (numero > 0) {
// //     console.log("El número es positivo.");
// //   } else if (numero < 0) {
// //     console.log("El número es negativo.");
// //   } else {
// //     console.log("El número es zero.");
// //   }
// // }

// //Crear una función que muestra "¡Hola, mundo!" en la consola

// function mostrarHola() {
//   console.log("¡Hola, mundo!");
// }

// mostrarHola();

// //Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.

// function mostrarHolaNombre(nombre) {
//   console.log(`¡Hola, ${nombre}!`);
// }

// mostrarHolaNombre("Darwin");

// //Crear una función que recibe un número como parámetro y devuelve el doble de ese número.

// function calcularDoble(numero) {
//   return numero * 5;
// }

// let resultadoDoble = calcularDoble(5);
// console.log(resultadoDoble);

// //Crear una función que recibe tres números como parámetros y devuelve su promedio.

// function calcularPromedio(a,b,c) {
//     return (a + b + c) / 3;
// }
// let promedio = calcularPromedio(4, 7 , 10);
// console.log(promedio)

// //Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.

// function encontrarMayor(a,b){
//     return a > b ? a : b;
// }
// let numeroMayor = encontrarMayor(15, 9);
// console.log(numeroMayor)


// //Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.

// function cuadrado(numero) {
//     return numero * numero;

// }

// let numero = cuadrado(2)
// console.log(resultado)

// let nota1 = 7;
// let nota2 = 6;
// let nota3 = 3;
// let nota4 = 5;


// function calcularPromedio(nota1, nota2, nota3, nota4){
//     return;
// }

// function verificarAprobacion(promedio){
//     return;

// }

// function calcularPromedio(nota1, nota2, nota3, nota4){
//     let promedio = (nota1 + nota2 + nota3 + nota4)
//     return promedio ;
// }

// function verificarAprobacion(promedio){
//          return promedio >= 5 ? 'Aprobado' : 'Reprobado';
// }

// //forma tradicional
// function calcularDobleTriple(numero) {
//   const doble = numero * 2;
//   const triple = numero * 3;

//   return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
// }

// const numero = 5;
// const resultado = calcularDobleTriple(numero);
// console.log(resultado);

//forma correcta de hacer el codigo mas legible
// function calcularDoble(numero) {
//   return numero * 2;
// }

// function calcularTriple(numero) {
//   return numero * 3;
// }

// const numero = 5;
// const doble = calcularDoble(numero);
// const triple = calcularTriple(numero);

// console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);

//crea una funcion que calcule el indice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibiran como parametros.

// function calcularIMC(peso, altura) {
//     //valorar que los parametros sean positivos
//     if (peso <= 0 || altura <= 0){
//         return "error: peso y altura deben ser mayores a cero";
//     }
//     //calcular el IMC
//     let imc = peso / (altur ** 2);
//     //devolve el resultado
//     return imc;
    
// }
// console.log(calcularIMC)

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function factorial(n) {
//     if (n === 0 || n === 1){
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
    
// }

// //Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

// function converitrDolaresAReales(valorEnDolares){
//     let cotizacionDolar = 4.80;
//     let valorEnReales = valorEnDolares *cotizacionDolar;
//     return valorEnReales;
// }

// //Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

// function calculcarAreaYPerimetro(altura, anchura) {
//     let area = altura * anchura;
//     let perimetro = 2 * (altura + anchura);
    
//     console.log('El área de la sala es:' + area + 'unidades cuadradas');
//     console.log('El perímetro de la sala es: ' + perimetro + 'unidades')
// }

// //Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// function calcularAreaPerimetroCirculo(radio) {
//     let pi = 3.14;
//     let area = pi * radio * radio;
//     let perimetro = 2 * pi * radio;
//      console.log('El áarea de la sala es: ' + area + ' unidades cuadradas');
//      console.log('El perímetro de la sala es: ' +  perimetro + 'unidades');
    
// }

// //Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function tablaDeMultiplicar(numero) {
//     for (var i = 1; i <= 10; i ++);
//     { console.log(numero + ' x' + i + '=' + numero * i);

//     }
// }

// function sortearLibro() {
//   let libroElegido = parseInt(Math.random() * numeroLimite + 1);
//   let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
//   if (cantidadDeLibrosSorteados == numeroLimite) {
//     listaDeLibrosSorteados = [];
//   }
//   // Código omitido
// }

// //let = listaGenerica;
// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//  console.log(lenguajesDeProgramacion)
// //forma de mostrar un array de manera inversa con reverse
//  lenguajesDeProgramacion.reverse();
//  console.log(lenguajesDeProgramacion);
// //forma de recorrer un array con for
//  for (let i = 0; i < lenguajesDeProgramacion.length; i++){
//     console.log(lenguajesDeProgramacion[i]);
//  }
// //forma de recorrer un array con forEach
//  lenguajesDeProgramacion.forEach(function(elemento){
// //     console.log(elemento);
//  });
//definir una lista de numeros
 let lista = [1, 2, 3, 4, 5];
 //usar reduce para sumar todos los elementos de la lista
 let suma = lista.reduce(function(acumulador, elemento){
    return acumulador + elemento;
 })
 //dividir la suma por a longitud de la lista para obtener el promedio
 let promedio = suma / lista.length;
 //imprimir el resultado
 console.log(promedio);

 //definir una lista
 let listaNumeros=[1, 2, 3, 4, 5];
 //usar Math.max() y Math.min() para obtener el mayor y el menor de la lista
 let maximo = Math.max(...listaNumeros);
 let minimo = Math.min(...listaNumeros);
 //imprimir el resultado

 console.log('El número más grande es', maximo);
 console.log('El número más pequeño es', minimo);

 
