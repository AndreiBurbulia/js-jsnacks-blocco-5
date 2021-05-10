/*
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
*/


/**
 * # Intervallo di un array
 * 
 * Questa funzione permette di estrapolare gli elementi di un array tra due limiti inseriti dall'utente.
 * IMPORTANTE !!! la prima posizione dell'array corrisponde a "0".
 * 
 * @param {string} array -Inserisci un array 
 * @param {number} min - la posizione dell'array da cui partire
 * @param {number} max - la posizione dell'array in cui finire
 * @returns -Ritorna un nuovo array con il range selezionato
 */
function intervalOfArray(array, min, max) {
    var arrayNuovo = [];

    if (min < max && max < array.length && min >= 0) {

        for (var i = min; i <= max; i++) {
            var elemento = array[i];
            arrayNuovo.push(elemento);
        }

        return arrayNuovo
    } else {
        return "I due limite non vanno bene la lunghezza masssima dell'array è : " + (array.length - 1)
    }
}



var array = [0, 1, 2, 3, 4, 5];
var numeroPiccolo = 1;
var numeroGrande = 2;

var prova = intervalOfArray(array, numeroPiccolo, numeroGrande);
console.log(prova);

/*

//Con il metodo slice --> il margine superiore e escluso, quindi se metto 6 sara la posizione 5 dell'array
var prova2 = array.slice(numeroPiccolo, numeroGrande);
console.log(prova2);

*/