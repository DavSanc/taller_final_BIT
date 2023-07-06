//*****************TALLER DE EJERCICIOS BIT 06/07/2023************/

/* 3. ¿Qué tan bueno eres realmente?*
Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa.
Quiere saber si es mejor que el estudiante promedio de su clase.
Recibe una lista con los puntajes de las pruebas de sus compañeros.
¡Ahora calcule el promedio y compare su puntaje!
¡Devuelve True si estás mejor, de lo contrario False!
Nota: Sus puntos no están incluidos en la lista de puntos de su clase. 
¡Para calcular el punto promedio, puede agregar su punto
a la lista dada!
*/

function mejorPuntaje(puntajes, tuPuntaje) {
    let suma = 0;
    let totalPuntajes = puntajes.length + 1;
    for (let i = 0; i < puntajes.length; i++) {
        suma += puntajes[i];
    }
    let promedioClase = (suma + tuPuntaje) / totalPuntajes;
    return tuPuntaje > promedioClase
}

let puntajesCompaneros = [3.5, 2.8, 4.5];
let tuPuntaje = 4.6;
let resultado = mejorPuntaje(puntajesCompaneros, tuPuntaje)
console.log(resultado);