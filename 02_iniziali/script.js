/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function prendiIniziali(listaNomi) {
    const iniziali = [];         // Creo un nuovo array vuoto dove inserirò le iniziali
    for (let i = 0; i < listaNomi.length; i++) {
        iniziali.push(listaNomi[i][0]);          // Prendo la prima lettera del nome e la aggiungo all'array iniziali
    }
    return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(prendiIniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]