/*
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

*/


/**
 * # Alternating Union Array
 * This function joins two arrays alternately, the two array need to hace the same lenght to have the possibility to join.
 * 
 * @param {string} array1 -First Array to add, first element is first elemento of this array
 * @param {string} array2 -Second array to add
 * @returns  -If the lenght it's the same return an array with union otherwise return a warning message
 */
function alternatingUnionArray(array1, array2) {
    var arrayUnita = [];

    if (array1.length === array2.length) {
        for (var i = 0; i < array1.length; i++) {
            var elementoUno = array1[i];
            var elementoDue = array2[i];
            arrayUnita.push(elementoUno);
            arrayUnita.push(elementoDue);
        }
        return arrayUnita
    } else {
        return "La lunghezza dei due array e diversa"
    }
}

var array1 = [1, 2, 3, 4];
var array2 = ["a", "b", "c", "d"];


var arrayUnito = alternatingUnionArray(array1, array2);
console.log(arrayUnito);