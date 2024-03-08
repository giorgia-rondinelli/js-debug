// /*******************************************************************************
// ​
//     Per questo esercizio, rispondi a queste domande:
//     1- Che cosa fa questo codice?
//     2- Sono presenti errori di sintassi?
//     3- Sono presenti errori logici?
// ​
//     Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
// ​
// *******************************************************************************/


// // ESERCIZIO 1

// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//        return message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } 
//     else {
//         return message = 'Hai più di 18 anni!';
//     }
// }
// console.log(checkAge());

// // stampa un messaggio in base all'età 
// // message deve essere una let 
// // bisogna inserire return prima di message 



// // ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

// // conta quanti colori ci sono nella palette 
// // errore di scrittura di length

// // // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// // somma il numero inserito dall'utente a 12
// // va inserito un parseInt prima del prompt 

// // // ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//         console.log('Accesso consentito!')
//     }

   
//      else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// controlla se la mail inserita è nell'array e stampa un messaggio di conseguenza 
// elimino il secondo if e inserisco il console log nel primo if 


// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';
                console.log('Accesso consentito!')
            }

        }

        else {
            console.log('Accesso negato!');
        }
    }
}
    checkAccessImproved();

// controlla con un ciclo se la mail inserita è presente nell'array e se composta almeno da 5 caratteri 
// mancava la graffa 



























