const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/* Questo array viene usato per gli esercizi. Non modificarlo. */

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('*******ESERCIZIOA*******')

var sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('*******ESERCIZIOB*******')

let random = (Math.floor(Math.random() * 20));
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('*******ESERCIZIOC*******')

var me = {
  name: 'Benedetto',
  surname: 'De Stefano',
  age: 26
}

console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('*******ESERCIZIOD*******')

delete me.age;
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('*******ESERCIZIOE*******')

me.skills = ['.Net', 'Java', 'javascript']
console.log(me)


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('*******ESERCIZIOF*******')

me.skills.push('swift')
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('*******ESERCIZIOG*******')

me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('*******ESERCIZIO1*******')

function dice() {
  return Math.floor(Math.random() * 6) + 1
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('*******ESERCIZIO2*******')

function whoIsBigger(n1, n2) {
  if (n1 > n2) {
    console.log(n1);
  } else {
    console.log(n2)
  }
}

whoIsBigger(5, 10)

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('*******ESERCIZIO3*******')

function splitMe(str1) {
  return str1.split(' ')
}
console.log(splitMe('i love coding'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('*******ESERCIZIO4*******')

function deleteOne(str2, bool) {
  if (bool === true) {
    return str2.slice(1)
  } else {
    return str2.slice(0, -1)
  }
}

console.log(deleteOne('bene', true))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('*******ESERCIZIO5*******')

function onlyLetters(str3) {
  return str3.replace(/[0-9]?/g, "");
}

console.log(onlyLetters('i have 4 dogs'))
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('*******ESERCIZIO6*******')

function isThisAnEmail(str4) {
  let parametri = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (str4.match(parametri)) {
    console.log('true')
  } else {
    console.log('false')

  }
}
isThisAnEmail('benedetto@gmal.com')

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('*******ESERCIZIO7*******')

let settimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']

function whatDayIsIt() {
  const dataCorrente = new Date()
  let numeroGiorno = dataCorrente.getDay()
  return settimana[numeroGiorno];
}

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('*******ESERCIZIO8*******')


function rollTheDices(n3) {
  let sum = 0;
  let values = []

  for (let i = 0; i < n3; i++) {
    let roll = dice();
    values.push(roll);
    sum += roll;
  }
  let risultato = {
    sum, values
  }
  return risultato
}

console.log(rollTheDices(3))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('*******ESERCIZIO9*******')

function howManyDays(data) {
  const dataCorrente1 = new Date()
  return Math.floor((dataCorrente1.getTime() - data.getTime()) / (1000 * 3600 * 24))
}

console.log(howManyDays(new Date('2023/04/10')))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('*******ESERCIZIO10*******')


function isTodayMyBirthday(compleanno) {
  let dataOdierna = new Date();
  return (dataOdierna.getMonth() === compleanno.getMonth() && dataOdierna.getDate() === compleanno.getDate());
}

console.log(isTodayMyBirthday(new Date('1997-02-20')));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('*******ESERCIZIO11*******')

function deleteProp(oggetto, stringa) {
  delete oggetto[stringa]
  return oggetto
}
console.log(deleteProp(
  { marca: 'Bmw', 
  anno: 2020,
  posti: 5 }, 'anno'))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('*******ESERCIZIO12*******')

function newestMovie(movies) {
  let filmRecente = movies[0];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(filmRecente.Year)) {
      filmRecente = movies[i];
    }
  }
  return filmRecente.Year
}
console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('*******ESERCIZIO13*******')

function countMovies(nFilm) {
  return nFilm.length;
}

console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('*******ESERCIZIO14*******')

function onlyTheYears(anni) {
  return anni.map((elementi) => elementi.Year)
}

console.log(onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('*******ESERCIZIO15*******')
function onlyInLastMillennium(fMillennio) {
  return fMillennio.filter(elementi => parseInt(elementi.Year) <= 2000)
}
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('*******ESERCIZIO16*******')

function sumAllTheYears(sAnni) {
  let risultato = 0;
  for (let i = 0; i < sAnni.length; i++) {
    risultato += parseInt(sAnni[i].Year);
  }
  return risultato;
}

console.log(sumAllTheYears(movies))


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
//
console.log('*******ESERCIZIO17*******')

function searchByTitle(str5) {
  let mioArray = [];
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str5)) {
      mioArray.push(movies[i])
    }
  }
  return mioArray;
}


console.log(searchByTitle('Lord'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('*******ESERCIZIO18*******')



function searchAndDivide(str6) {
  const oggetto1 = {
    match: [],
    unmatch: []
  }
  for(i = 0; i < movies.length; i++){
    if (movies[i].Title.includes(str6)){
      oggetto1.match.push(movies[i].Title)
    }else {
      oggetto1.unmatch.push(movies[i].Title)
    }
  }
  return oggetto1;
}
console.log(searchAndDivide('Avengers'))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('*******ESERCIZIO19*******')

function removeIndex(n6) {
  delete movies[n6]
  return movies;
}

console.log(removeIndex(5))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('*******ESERCIZIO20*******')

function selezione() {
  document.getElementById('container')
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('*******ESERCIZIO21*******')

function seleziona() {
  document.querySelectorAll('td')
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('*******ESERCIZIO22*******')

function changeTd() {
  let change = document.getElementsByTagName('td')
  for (let i = 0; i < change.length; i++) {
    console.log(change[i].innerText)
  }
}
changeTd()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('*******ESERCIZIO23*******')

function changeBkg() {

  const colore = document.querySelectorAll('a');
  colore.forEach((element) => element.style.backgroundColor = 'red')
}
changeBkg()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('*******ESERCIZIO24*******')

function aggiungiLi() {
  let aggiungi = document.createElement('li')
  document.getElementById('myList').appendChild(aggiungi).innerText = 'cinque';
}

aggiungiLi()
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log('*******ESERCIZIO25*******')

function svuota() {
  let list = document.getElementById('myList')
  list.innerHTML = ''
}

svuota()
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('*******ESERCIZIO26*******')



function aggiungia() {
  const elementoTr = document.querySelectorAll('tr')
  elementoTr.forEach((element) => element.classList.add('test'));
}

aggiungia()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/


