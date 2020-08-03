var nomeUtente;
var cognomeUtente;
var colorePreferito;

// prompt
nomeUtente = prompt("come ti chiami?");
cognomeUtente = prompt("cognome?");
colorePreferito = prompt("il tuo colore preferito?");

// nome-cognome-colore+19
document.getElementById('nomecogn_colore').innerHTML = nomeUtente + cognomeUtente + colorePreferito + 19;
