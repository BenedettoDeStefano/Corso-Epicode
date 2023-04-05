/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const numero1 = 100;
const numero2 = 50;

if (numero1 > numero2){
    console.log (numero1);
} else
    console.log (numero2)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numero3 = 30;

if (numero3 != 5) {
    console.log('not equal')
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numero4 = 40;

if ((numero4 % 5) === 0) {
    console.log('divisibile per 5')
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numero5 = 50;
const numero6 = 8;

if (numero5 === 8 || numero6 === 8){
    console.log('è uguale a 8')
}

if((numero5 - numero6) === 8 || (numero5 + numero6) === 8) console.log('Addizione/sottraione uguale a 8')



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 300;

if (totalShoppingCart > 50){
    console.log(totalShoppingCart)
} else {
    console.log(totalShoppingCart + 10)
};

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

if (totalShoppingCart > 50){
    console.log((totalShoppingCart * 0.8))
} else {
    console.log((totalShoppingCart * 0.8) + 10)
};


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numero7 = 10;
const numero8 = 50;
const numero9 = 30;

if(numero7 > numero8){
  if(numero7 > numero9){
    if(numero8 > numero9){
      console.log(numero7 + ' ' + numero8 + ' ' + numero9)
    }else{
      console.log(numero7 + ' ' + numero9 + ' ' + numero8)
    }
  }else{
    console.log(numero9 + ' ' + numero7 + ' ' + numero8)
  }
}else if(numero8 > numero9){
        if(numero9 > numero7){
          console.log(numero8 + ' ' + numero9 + ' ' + numero7)
        }else{
          console.log(numero8 + ' ' + numero7 + ' ' + numero8)
        }
}else{
  console.log(numero9 + ' ' + numero8 + ' ' + numero7)
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore = 10;
console.log(typeof valore);

let valore2 = "Benedetto";
console.log(typeof valore2);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numero10 = 5;

if (numero10 % 2 === 0){
  console.log('numero pari')
}else {
  console.log("numero dispari")
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  me.city = 'Toronto';
  console.log(me);
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
  me.lastName = ''
  console.log(me);
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */

  me.skills.pop();
  console.log(me);
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  var array = [];
  array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(array)
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  array[9] = 100;
  console.log(array);