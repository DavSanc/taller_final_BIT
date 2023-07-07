//*****************TALLER DE EJERCICIOS BIT 06/07/2023************/

/* EJERCICIO 4 = 0.25 
Finalice la función uefaEuro2023() para que devuelva una cadena como en los ejemplos a continuación:

Entrada:    uefaEuro2023(['Alemania', 'Ucrania'],[2, 0]) 
Salida:     "¡En el partido Alemania - Ucrania, ganó Alemania!"

Entrada:     uefaEuro2023(['Belgium', 'Italy'],[0, 2]) 
Salida:     "¡En el partido Bélgica - Italia, ganó Italia!"

Entrada:    uefaEuro2023(['Portugal', 'Iceland'],[1, 1]) 
Saluda:     "En el partido Portugal - Islandia, los equipos empataron".
*/

function uefaEuro2023(equipos, resultados) {
    let equipoLocal = equipos[0];
    let equipoVisitante = equipos[1];

    let resultadoLocal = resultados[0];
    let resultadoVisitante = resultados[1];

    if(resultadoLocal > resultadoVisitante){
        return "!En el partido " + equipoLocal + " - " + equipoVisitante + ", gano" + equipoLocal + "!";
    } else if (resultadoLocal < resultadoVisitante){
        return "!En el partido " + equipoLocal + " - " + equipoVisitante + ", gano" + equipoVisitante + "!";
    } else {
        return "En el partido " + equipoLocal + " - " + equipoVisitante + ", los equipos empataron. "; 
    }
   
}

console.log(uefaEuro2023(['Alemania','Ucrania'], [2, 0]));
console.log(uefaEuro2023(['Belgium','Italy'], [0, 2]));
console.log(uefaEuro2023(['Portugal','Iceland'], [1, 1]));
