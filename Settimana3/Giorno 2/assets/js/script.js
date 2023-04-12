/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

let stringa1 = 'Benedetto'
let stringa2 = 'De stefano'

function estrazione(stringa1, stringa2){
    let primeLettere = stringa1.slice(0, 2);
    let sultimeLettere = stringa2.slice(stringa2.length -3);
    return primeLettere + sultimeLettere;
}

console.log(estrazione('Benedetto','Stefano').toUpperCase());

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

let mioArray = []


function aggiungi(){
for ( let i = 0; i < 10; i++){
    mioArray.push(Math.floor(Math.random()* 101));
} 
}

aggiungi();
console.log(mioArray);




/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter puÃ² aiutare)
*/



function pari (){
let mioArray2 = []
for ( let i = 0; i < 5; i++){
    mioArray2.push(Math.floor(Math.random()* 100)) 
}
   console.log(mioArray2); 

let filtrati = mioArray2.filter(elementi => elementi % 2 === 0);
return filtrati;

}
console.log(pari())


/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array for
*/

let mioArray3 = [1, 5, 8, 9]
let somma = 0

function sommaArray() {
    for ( let i = 0; i < mioArray3.length; i++){
    somma += mioArray3[i]
    }
    return somma;
}

console.log(sommaArray(mioArray3)) 

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

let mioArray4 = [1, 5, 8, 9]

let somma2 = mioArray4.reduce((totale, numeri) => totale + numeri)

console.log(somma2)


/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const incremento = (array, n) => {
	return array.map((el) => el + n);
};

console.log(incremento([6, 18, 30, 45, 7, 90, 5, 10, 56, 130], 10));

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/


let lunghezze = (array) => {
	return array.map((elementi) => elementi.length);
};

console.log(lunghezze(['EPICODE', 'is', 'great']));



/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

/* Questo array di film verrÃ  usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    }
  ];
  
  /* ESERCIZIO 10
    Scrivi una funzione per trovare il film piÃ¹ vecchio nell'array fornito.
  */

    let filmVecchi = (array) => {
      let result = { Year: 2100 };
      for (let i = 0; i < array.length; i++) {
        let currentYear = parseInt(array[i].Year);
        if (currentYear < result.Year) {
          result = array[i];
        }
      }
    
      return result;
    };
    
    console.log(filmVecchi(movies));
  
  /* ESERCIZIO 11
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */

    const countMovies = (array) => {
      return array.length;
    };
    
    console.log(countMovies(movies));


  /* ESERCIZIO 12
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */
  

const onlyTitles = (array) => {
	return array.map((elem) => elem.Title);
};

console.log(onlyTitles(movies));

  /* ESERCIZIO 13
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */
    const onlyInThisMillennium = (array) => {
      let result = [];
      for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i].Year) > 2000) {
          result.push(array[i]);
        }
      }
      return result;
    };

    console.log(onlyInThisMillennium(movies));
  
  /* ESERCIZIO 14
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */
    const getMovieById = function (array, id) {
      let foundMovie = null;
      for (let i = 0; i < array.length; i++) {
        if (array[i].imdbID === id) {
          foundMovie = array[i];
        }
      }
      return foundMovie;
    };

    console.log(getMovieById(movies, 'tt0355702'));

  /* ESERCIZIO 15
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */

    const sumAllTheYears = (array) => {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result += parseInt(array[i].Year);
	}
	return result;
};

console.log(sumAllTheYears(movies));