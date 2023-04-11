/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
let l1 = 8;
let l2 = 9;


function area(l1, l2) {
    return l1 * l2;
}

console.log(area(8,9));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

let numero1 = 10;
let numero2 = 60;

function crazySum(numero1 , numero2){
    return numero1 + numero2;
}

let risultato2 = crazySum(10, 60)

if(numero1 === numero2){
    console.log(risultato2 * 3);
} else {
    console.log(risultato2);
}


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

let crazyDiff = function (numero3) {
	if (numero3 > 19) {
		return Math.abs(numero3 - 19) * 3;
	} else {
		return Math.abs(numero3 - 19);
	}
};
console.log(crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let n = 10;

function boundary (n){
    return n;
}

let risultato4 = boundary(10);

if(n >= 20 && n <= 100 || n === 400 ){
    console.log('true');
} else {
    console.log('false')
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let epify = function (stringa1) {
	if (stringa1.startsWith('EPICODE')) {
		return stringa1;
	} else {
		return 'EPICODE ' + stringa1;
	}
};
console.log(epify('EPICODE, corso web developer')); 



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

numeroPositivo= 40;

function check3and7 (numeroPositivo){
    if (numeroPositivo % 3 === 0 || numeroPositivo % 7 === 0){
        return ('è positivo')
    } else {
        return ('è negativo')
}
}

console.log(check3and7(40));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let stringa2 = 'EPICODE'

function reverseString(stringa2){
    let stringaSplit = stringa2.split('');
    let stringaInversa = stringaSplit.reverse();
    return stringaInversa.join('')
}


console.log(reverseString('EPICODE'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let upperFirstPhrase = function (stringa3) {
	let words = stringa3.split(' ');
	let finalString = [];
	for (let i = 0; i < words.length; i++) {
		let firstChar = words[i].charAt(0);
		let uppercaseChar = firstChar.toUpperCase();
		let cutString = words[i].slice(1);
		let finalWord = uppercaseChar + cutString;
		finalString.push(finalWord);
	}
	console.log(finalString.join(' '));
};

upperFirstPhrase('corso epicode');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

let stringa4 = 'Epicode'

function cutString(){
    return stringa4.slice(1, stringa4.length -1);
}

console.log(cutString('Epicode'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/


function giveMeRandom (n2){
    let mioArray = []
    for (let i = 0; i < n2; i++){
        mioArray.push(Math.floor(Math.random() * 11))
    }
    return mioArray;
}

console.log(giveMeRandom(8));