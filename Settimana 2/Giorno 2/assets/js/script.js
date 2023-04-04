/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltÃ  puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non Ã¨ stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

document.getElementById('esercizio1').innerHTML = '<h1>Datatype Javascript</h1><ul><li>String</li><li>Number</li><li>Boolean</li><li>date</li><li>null</li><li>Undefined</li> <p><strong>String:</strong> è un semplice testo. Più nello specifico è una sequenza di caratteri e viene scritta in sempre tra apici o virgolette.</p> <p><strong>Number: </strong>è un dato di tipo numerico. Può essere quindi un numero intero o anche decimale.</p> <p><strong>Boolean:</strong>Un dato che può assumere solo i valori true (vero) o false (falso).</p><p><strong>Date: </strong>Dato che memorizza data e orario.</p><h2> Data Type primitivi:</h2><p><strong>Null:</strong> Si usa quando crei una variabile alla quale intenzionalmente non assegni un oggetto.</p><p><strong>Undefined:</strong> Quando causalmente manca un oggetto.</p>'

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const nome = 'Benedetto';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var primoNumero = 12;
var secondoNumero = 20;
var totale = (primoNumero + secondoNumero);
console.log(totale);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" giÃ  esistente: il tuo cognome.
  Dimostra l'impossibilitÃ  di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//nome = 'De Stefano';


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var y = 4;
document.getElementById('esercizio6').innerHTML = y - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = 'john';
var name2 = 'John';

document.getElementById('esercizio7').innerHTML = name1 == name2;

/* if (name1 == name2){
    document.getElementById('esercizio7').innerHTML = 'sono uguali'
} else {
    document.getElementById('esercizio7').innerHTML = 'sono diversi'
}
*/


document.getElementById('esercizioExtra').innerHTML = name1 == name2.toLowerCase();

