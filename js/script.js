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
    document.getElementById("output").innerHTML = "Caro cliente,<br>" + "siamo lieti di informarti che grazie agli sconti sull'età l'importo finale del biglietto è di " + (prezzo_no_sconto - (prezzo_no_sconto * sconto_minori)).toFixed(2) + " €. <br><br>" + "Le auguriamo un buon viaggio!";
}else if(età > 65){
    document.getElementById("output").innerHTML = "Caro cliente,<br>" + "siamo lieti di informarti che grazie agli sconti sull'età l'importo finale del biglietto è di " + (prezzo_no_sconto - (prezzo_no_sconto * sconto_over)).toFixed(2) + " €. <br><br>" + "Le auguriamo un buon viaggio!";
}else{
    document.getElementById("output").innerHTML = "Caro cliente,<br>" + "il prezzo del suo biglietto corrisponde a " + (prezzo_no_sconto).toFixed(2) + "€. <br><br>" + "Le auguriamo un buon viaggio!";
}

