// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

$(document).ready(function(){


var numRandom = [];

var numGenerati = 5;

for ( var i = 0; i < numGenerati; i++){
    var numeroRandom = 0
    numRandom.push(random(numeroRandom));
};
console.log(numRandom);


alert('I numeri che devi memorizzare sono: '+ numRandom);

var secondi = 3000;

var interval = setInterval(function(){


    var numUtente = [];

    for ( var i = 0; i < numGenerati; i++){
        var numeroUtente = (parseInt(prompt('Inserisci i numeri che hai memorizzato')));

        numUtente.push(numeroUtente);
    }
    console.log(numUtente);
    

    if(i < numGenerati){
        clearInterval(interval);
    }
},secondi);

console.log('ciao');


















// FUNZIONI

function random(numero){
    numero = Math.floor(Math.random()*100 + 1);
    return numero;
};




    // END DOCUMENT
});