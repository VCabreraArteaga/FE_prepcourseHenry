/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [array.length - 1]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray = [];
   for (var i = 0; i < array.length; i++){
      nuevoArray.push(array[i] + 1)
   }
   return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.push(elemento)
   return array
}

console.log(agregarItemAlFinalDelArray([1,2,3], 9))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

console.log(agregarItemAlComienzoDelArray([8,9,3],10))



function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ')
}

console.log(dePalabrasAFrase(['Hola','es','un','gusto','saludarte.']));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
return array.includes(elemento);
}

console.log(arrayContiene(['mercancia','carga','documentación'], 'carga'))

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
/*primer opción*/
//    var acumulador = 0;
//    for (let index = 0; index < arrayOfNums.length; index++) {
//      acumulador = acumulador + arrayOfNums[index]
//    }
//    return acumulador 
// }

// console.log(agregarNumeros([1,2,4]))

return arrayOfNums.reduce((acum, next) => acum + next)

}

console.log(agregarNumeros([1,2,3,4]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // primer opción
//    var resultado = 0;

//    for (let index = 0; index < resultadosTest.length; index++) {
//    resultado = resultado + resultadosTest[index] 
//    }
// return resultado / resultadosTest.length
// }

// Segunda opcción 
//return resultadosTest.reduce((acum, next) => acum + next) / resultadosTest.length

//Tercer opción, utilizando la función creada en el ejercicio anterior (se recicla código)

return agregarNumeros(resultadosTest) / resultadosTest.length;

}
console.log(promedioResultadosTest([2,3,4,5]))

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   //primer intento (opción 1)
   // return Math.max(arrayOfNums)

   var max = 0

   for (let index = 0; index < arrayOfNums.length; index++) {
      if (arrayOfNums[index] > max){
         max = arrayOfNums[index]
      } 
      
   }
return max
}

console.log(numeroMasGrande([7, 45, 99]));

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var producto = 1;
   if (arguments.length== 0){
      return 0
   }
   for (var i = 0; i < arguments.length; i++) {
      producto = producto * arguments[i]
   }
   return producto
}
console.log(multiplicarArgumentos(4,5));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   var contadorM18 = 0 
for (var index = 0; index < array.length; index++) {
   if (array[index] > 18){
      contadorM18++
   }
}
return contadorM18
}

console.log(cuentoElementos([]));

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia == 1 || numeroDeDia == 7){
return 'Es fin de semana'
   }else{
      return 'Es dia laboral'
   }
}

console.log(diaDeLaSemana());

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
return num = num.toString()[0] == 9
}
console.log(empiezaConNueve(989906));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
var verficador = array[0]
for (const elem of array) {
   if(elem != verficador) return false
}
return true
}
console.log(todosIguales([4,4,4]));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let newArr = [];

   for (let i = 0; i < array.length; i++) {
      if(
      array[i] == 'Enero'||
      array[i] == 'Marzo'||
      array[i] == 'Noviembre'
      ){
         newArr.push(array[i]);
      }  
   }

if (newArr.length == 3){
   return newArr
}else{
   return 'No se encontraron los meses pedidos'
}

}
console.log(mesesDelAño(['Diciembre','Octubre','Julio','Enero','Septiembre','Marzo','Junio','Agosto','Noviembre']));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   var tablaSeis = []

   for (let i = 0; i <= 10 ; i++){
tablaSeis.push(i * 6)
   }
return tablaSeis
}

console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   return array.filter((elemento) => elemento > 100)
}

console.log(mayorACien([10,153,34,45,56,78,90,134,23,178,199]));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
  
   let result = false;
   let newArray = [];
   for (let i = 0; i < 10; i++) {
      num += 2;
      newArray.push(num);
      if(num == i){
         result = true;
         break
      }
   }
if(result == true){
   return 'Se interrumpió la ejecución'
} else {
   return newArray
}
}

console.log(breakStatement(2));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

  let newArray = []

   for (let i = 0; i < 10; i++) {
      if(i === 5){
         continue;
      }
      num += 2;
      newArray.push(num);
   }
   return newArray
}

console.log(continueStatement(0));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
