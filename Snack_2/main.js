/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

var zucchineCorte = [], zucchineLunghe = [], zucchine15 = [];

for (var i = 0; i < zucchina.length; i++) {
    var elemento = zucchina[i];
    if (elemento.lunghezza > 15) {
        zucchineLunghe.push(elemento);
    } else if (elemento.lunghezza < 15) {
        zucchineCorte.push(elemento);
    } else {
        zucchine15.push(elemento);
    }
}

console.log("ZUcchine lunghe: ");
console.log(zucchineLunghe);
console.log("ZUcchine corte: ");
console.log(zucchineCorte);
console.log("ZUcchine di 15cm: ");
console.log(zucchine15);


//stampare il peso dei due gruppi
var pesoZucchineLunghe = 0, pesoZucchineCorte = 0, pesoZucchine15 = 0;


//Zucchine Lunghe 
for (var i = 0; i < zucchineLunghe.length; i++) {
    var elemento = zucchineLunghe[i];
    pesoZucchineLunghe += elemento.peso;
}
console.log("Le zucchine lunghe pesano " + pesoZucchineLunghe + " Grammi");

//Zucchine Corte 
for (var i = 0; i < zucchineCorte.length; i++) {
    var elemento = zucchineCorte[i];
    pesoZucchineCorte += elemento.peso;
}
console.log("Le zucchine corte pesano " + pesoZucchineCorte + " Grammi");


//Zucchine Lunghe 
for (var i = 0; i < zucchine15.length; i++) {
    var elemento = zucchine15[i];
    pesoZucchine15 += elemento.peso;
}
console.log("Le zucchine di 15cm pesano " + pesoZucchine15 + " Grammi");