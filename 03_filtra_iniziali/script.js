/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function nomiConIniziale(listaNomi, lettera) {
  const risultati = [];                       // Array vuoto dove inseriremo i nomi che soddisfano la condizione
  const letteraMinuscola = lettera.toLowerCase();  // Convertiamo la lettera fornita in minuscolo

  for (let i = 0; i < listaNomi.length; i++) {
    if (listaNomi[i][0].toLowerCase() === letteraMinuscola) {  // Confrontiamo la prima lettera in minuscolo
      risultati.push(listaNomi[i]);                             // Aggiungiamo il nome che soddisfa la condizione
    }
  }

  return risultati;  // Restituiamo l'array finale
}


// Invoca la funzione qui e stampa il risultato in console


console.log(nomiConIniziale(names, "m"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]