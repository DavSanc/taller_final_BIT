//*****************TALLER DE EJERCICIOS BIT 06/07/2023************/

/* EJERCICIO # 7 / Valor 0.25 - El mayor de una lista
Crea una función llamada max (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.

Nota: No utilices el método Math.max de JavaScript. 
Código de prueba
console.log( max( [ 1, 2, 3, 4 ] ) ) // 4
console.log( max( [ 63, 85, 39, 24, 3 ] ) ) // 85
*/
function max(arr) {
    var maximo = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maximo) {
        maximo = arr[i];
      }
    }
    return maximo;
  }
  console.log(max([1, 2, 3, 4]));
  console.log(max([63, 85, 39, 24, 3]));

