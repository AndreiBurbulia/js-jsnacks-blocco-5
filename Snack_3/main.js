/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/


/*
|Prima di tutto prova a fare i passaggi per vedere il funzionamento e se funziona
|dopo creo la funzione e modifico le variabili se serve 
*/


/*
var wordDivided = word.split("");
console.log(wordDivided);
var reverseword = wordDivided.reverse();
console.log(reverseword);
var finalWord = reverseword.join("");
console.log(finalWord);
*/

/**
 * # Reverse String
 * @param {string} word -Insert the string to reverse
 * @returns {string} - Return  the inverted string
 */
function reverseWord(word) {
    var wordDivided = word.split("");
    var reverseword = wordDivided.reverse();
    var finalWord = reverseword.join("");
    return finalWord
}


var word = "Ciao";

var prova = reverseWord(word);
console.log(prova);

word2 = "Ciao come va ?"
var prova2 = reverseWord(word2);
console.log(prova2);