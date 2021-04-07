// Variabili
var prezzo_base = 0.21;
var sconto_minori = 20 / 100;
var sconto_over = 40 / 100;
var frase_sconto =  "Caro cliente,<br>" + "siamo lieti di informarti che grazie agli sconti sull'età l'importo finale del biglietto è di "
var frase_no_sconto = "Caro cliente,<br>" + "il prezzo del suo biglietto corrisponde a "
var buon_viaggio =  "Le auguriamo un buon viaggio!"

// Chiedo la sua età
var età = parseInt( prompt("Quanti anni hai?"));

// Chiedo il num di km che vuole percorrere
var distanza = parseInt(prompt("Quanti km vuoi percorrere"));


// Calcolare il prezzo del biglietto non scontato
var prezzo_no_sconto = prezzo_base * distanza;

// Prezzo finale
if(età < 18 ){
    document.getElementById("output").innerHTML = frase_sconto + (prezzo_no_sconto - (prezzo_no_sconto * sconto_minori)).toFixed(2) + " €. <br><br>" + buon_viaggio ;
}else if(età > 65){
    document.getElementById("output").innerHTML = frase_sconto + (prezzo_no_sconto - (prezzo_no_sconto * sconto_over)).toFixed(2) + " €. <br><br>" + buon_viaggio;
}else{
    document.getElementById("output").innerHTML = frase_no_sconto + (prezzo_no_sconto).toFixed(2) + " €. <br><br>" + buon_viaggio;
}

