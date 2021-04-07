// Variabili
var prezzo_base = 0.21;
var sconto_minori = 20 / 100;
var sconto_over = 40 / 100;

// Chiedo la sua età
var età = parseInt( prompt("Quanti anni hai?"));

// Chiedo il num di km che vuole percorrere
var distanza = parseInt(prompt("Quanti km vuoi percorrere"));


// Calcolare il prezzo del biglietto non scontato
var prezzo_no_sconto = prezzo_base * distanza;

// Prezzo finale
if(età < 18 ){
    console.log(prezzo_no_sconto - (prezzo_no_sconto * sconto_minori));
}else if(età > 65){
    console.log(prezzo_no_sconto - (prezzo_no_sconto * sconto_over));
}else{
    console.log(prezzo_no_sconto);
}

// Output 
//document.getElementById("output").innerHTML = "Caro cliente ti informiamo che grazie agli sconti sull'età l'importo finale da pagare è di " +  + "$";

