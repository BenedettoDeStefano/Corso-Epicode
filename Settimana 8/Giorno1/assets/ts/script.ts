let valore1: number = Math.floor(Math.random() * 100 + 1);
let valore2: number = Math.floor(Math.random() * 100 + 1);
let valoreEstratto : number = Math.floor(Math.random() * 100 + 1);

console.log(valore1)
console.log(valore2)
console.log(valoreEstratto)

switch (true) {
        		case valore1 === valoreEstratto:
        			console.log('Il giocatore 1 ha indovinato!');
        			break;
        
        		case valore2 === valoreEstratto:
        			console.log('Il giocatore 2 ha indovinato!');
        			break;
        
        		case Math.abs(valoreEstratto - valore1) < Math.abs(valoreEstratto - valore2):
        			console.log('Nessuno ha vinto ma il giocatore 1 si è avvicinato di più');
        			break;
        
        		case Math.abs(valoreEstratto - valore2) < Math.abs(valoreEstratto - valore1):
        		console.log('Nessuno ha vinto ma il giocatore 2 si è avvicinato di più');
        			break;

        		default:
        			console.log('Pareggio!');
        			break;
        	}

// ____________________________________________________________________ Soluzione 2

// const casuale = (): number => {
//     return Math.floor(Math.random() * 100 + 1)
// }


// enum giocatori {
//     valore1 = casuale(),
//     valore2 = casuale(),
//     random = casuale()
// }

// const scommessa = (): void => {
//     giocatori.valore1
//     giocatori.valore2
//     giocatori.random


//     console.log(giocatori.valore1)
//     console.log(giocatori.valore2)
//     console.log(giocatori.random)

//     if (giocatori.valore1 && giocatori.valore2 !== giocatori.random) {
//         if (Math.abs(giocatori.random - giocatori.valore1) > Math.abs(giocatori.random - giocatori.valore2)) {
//             console.log('il giocatore 2 ha vinto')
//         } else {
//             console.log('giocatore 1 ha vinto')
//         }

//     } 
// }


// scommessa()




            



	