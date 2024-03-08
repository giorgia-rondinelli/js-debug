/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// crea un ciclo che si ripete 5 volte e ogni volta che si ripete i incrementa di 1 


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
// è una funzione che aagiunge 5 ad un numero se questo è pari 
// bisogna inserire 3 uguali per fare un controlo più severo e controllare anche l'identità


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
// creo una funzione che esegue un ciclo fino ad arrivare a 5 
// le istruzioni tra le tonde devono essere divise da un punto e virgola


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)


function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length ; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
            
        }
        
    }return evenNumbers
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

// una funzione che sposta da un array in un altro solamente i numeri pari 
// minore o uguale alla lunghezzza dell'array senza il -1 
// non c'è bisogno del ; dopo l'incremento di i 
// servono 3 uguali 
// aggiungo [i] dopo numbers per prendere singolarmente i numeri 
// pusho (numbers[i])
// return lo metto fuori da for 
// non va il ; dopo le istruzioni di if 

