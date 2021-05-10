/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

var zucchina = [
    //peso espresso in Grammi
    //lunghezza espressa in cm
    {
        nome: "Nero di Milano",
        peso: 100,
        lunghezza: 15
    },
    {
        nome: "Romanesco",
        peso: 120,
        lunghezza: 13
    },
    {
        nome: "Ortolano di Faenza",
        peso: 150,
        lunghezza: 13
    },
    {
        nome: "Lunga Fiorentina",
        peso: 180,
        lunghezza: 18
    },
    {
        nome: "Siciliano",
        peso: 200,
        lunghezza: 20
    },
    {
        nome: "Striata di napoli",
        peso: 90,
        lunghezza: 10
    },
    {
        nome: "Bianca Triestina",
        peso: 100,
        lunghezza: 9
    },
    {
        nome: "Rigata Pugliese",
        peso: 110,
        lunghezza: 12
    },
    {
        nome: "Tondo Di Piacenza",
        peso: 250,
        lunghezza: 7
    },
    {
        nome: "Tondo di Nizza",
        peso: 100,
        lunghezza: 5
    },
];

var pesoTotale = 0;

for (var i = 0; i < zucchina.length; i++) {
    var elemento = zucchina[i];
    pesoTotale += elemento.peso;
}
console.log(pesoTotale + " Grammi Totali");


//Bonus lunghezza media 
var lunghezzaTotale = 0;
for (var i = 0; i < zucchina.length; i++) {
    var elemento = zucchina[i];
    lunghezzaTotale += elemento.lunghezza;
}
console.log(lunghezzaTotale + " Centimetri Totali");

var lunghezzaMedia = lunghezzaTotale / zucchina.length;
console.log(lunghezzaMedia + " Centimetri Medii");
