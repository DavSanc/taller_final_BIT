//*****************TALLER DE EJERCICIOS BIT 06/07/2023************/

/* EJERCICIO #8 / Valor: 0.25 - Sumar dos listas de igual longitud
Suma de dos listas: Dadas dos listas de números del mismo tamaño, crea una función en JavaScript que recorra ambas listas y
devuelva una nueva lista donde cada elemento sea la suma de los elementos correspondientes de las dos listas.
Entrada:    [ 3, 5, 7, -3, 9, 2 ]
            [ 5, -4, 7, 3, 5, 1 ]
Salida:     [ 8, 1, 14, 0, 14, 3 ]

*/

function sumaListas(lista1, lista2) {
    let resultado = [];
    for (let i = 0; i < lista1.length; i++){
        resultado.push(lista1[1] + lista2[1]);
    }
    return resultado;
}

let lista1 = [3, 5, 7, -3, 9, 2];
let lista2 = [5, -4, 7, 3, 5, 1];
let resultado = sumaListas(lista1, lista2);
console.log(resultado);


