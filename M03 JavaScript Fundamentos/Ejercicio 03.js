/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
      if(x === y){
         return true;
      }else{
         return false; 
      } 
   }

   console.log(sonIguales(78,45))

function tienenMismaLongitud(string1, string2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   string1 = string1.length
   string2 = string2.length

   if(string1 === string2){
      return true;
   }else{
      return false;
   }
}
console.log(tienenMismaLongitud('victor','manuefl'))

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:

      if(num < 90){
         return true;
      }else{
         return false;
      }
}

console.log(menosQueNoventa())

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:

      if(num > 50){
         return true;
      }else{
         return false;
      }

}

console.log(mayorQueCincuenta(87))


function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:

   if(num % 2 === 0){
      return true
   }else {
      return false
   }
}

console.log(esPar(34))

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 !== 0){
      return true
   }else {
      return false
   }

}

console.log(esImpar(45))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
