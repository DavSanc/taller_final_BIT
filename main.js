//*****************TALLER DE EJERCICIOS BIT 06/07/2023************/

/* Valor: 0.25 - Convertir una cadena en una lista

Escriba una función para dividir una cadena y convertirla en una lista de palabras.

Resultados esperados:

Entrada:    "Robin Singh" 
Salida:     ["Robin", "Singh"]

Entrada:    "Me encantan los arreglos, son mis favoritos"
Salida:     ["Yo", "amo", "arreglos", "ellos", "son", "mi", "favorito"]
*/

function cadenaALista(cadena) {
    var lista = cadena.split(" ");
    return lista;
  }

  console.log(cadenaALista("Robin Singh"));
  console.log(cadenaALista("Me encantan los arreglos, son mis favoritos"));

