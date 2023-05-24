"use strict";
// Primo metodo
class Lavoratore {
    constructor(_codredd, _redditoannuolordo) {
        this.tasseinps = 26.23;
        this.tasseirpef = 15;
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
    }
    getUtileTasse() {
        return this.redditoannuolordo * this.codredd / 100;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseinps / 100;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseirpef / 100;
    }
    getredditoAnnuoNetto() {
        return this.redditoannuolordo - (this.tasseinps + this.tasseirpef) / 100;
    }
}
console.log('----Professionista----');
let professionista = new Lavoratore(10000, 50000);
console.log(`utile tasse professionista: ${professionista.getUtileTasse()}€`);
console.log(`tasse inps professionista: ${professionista.getTasseInps()}€`);
console.log(`tasse irpef professionista: ${professionista.getTasseIrpef()}€`);
console.log(`reddito annuo netto professionista: ${professionista.getredditoAnnuoNetto()}€`);
console.log('----artigiano----');
let artigiano = new Lavoratore(5000, 20000);
console.log(`utile tasse artigiano: ${artigiano.getUtileTasse()}€`);
console.log(`tasse inps artigiano: ${artigiano.getTasseInps()}€`);
console.log(`tasse irpef artigiano: ${artigiano.getTasseIrpef()}€`);
console.log(`reddito annuo netto artigiano: ${artigiano.getredditoAnnuoNetto()}€`);
console.log('----commerciante----');
let commerciante = new Lavoratore(1000, 15000);
console.log(`utile tasse commerciante: ${commerciante.getUtileTasse()}€`);
console.log(`tasse inps commerciante: ${commerciante.getTasseInps()}€`);
console.log(`tasse irpef commerciante: ${commerciante.getTasseIrpef()}€`);
console.log(`reddito annuo netto commerciante: ${commerciante.getredditoAnnuoNetto()}€`);
//------------------------------------------------------------
//secondo metodo
// class Lavoratore {
//     codredd: number;
//     redditoannuolordo: number;
//     tasseinps: number = 26.23;
//     tasseirpef: number = 15;
//     constructor(_codredd: number, _redditoannuolordo: number, ) {
//         this.codredd = _codredd;
//         this.redditoannuolordo = _redditoannuolordo;
//     }
//     getUtileTasse(): number {
//         return this.redditoannuolordo * this.codredd / 100
//     }
//     getTasseInps(): number {
//         return this.getUtileTasse() * this.tasseinps / 100
//     }
//     getTasseIrpef(): number {
//         return this.getUtileTasse() * this.tasseirpef / 100
//     }
//     getredditoAnnuoNetto(): number {
//         return this.redditoannuolordo - (this.tasseinps + this.tasseirpef) / 100
//     }
// }
// let professionista = new Lavoratore (10000, 50000)
// console.log(professionista.getUtileTasse())
// console.log(professionista.getTasseInps())
// console.log(professionista.getTasseIrpef())
// console.log(professionista.getredditoAnnuoNetto())
// let artigiano = new Lavoratore (10000, 50000)
// console.log(artigiano.getUtileTasse())
// console.log(artigiano.getTasseInps())
// console.log(artigiano.getTasseIrpef())
// console.log(artigiano.getredditoAnnuoNetto())
// let commerciante = new Lavoratore (10000, 50000)
// console.log(commerciante.getUtileTasse())
// console.log(commerciante.getTasseInps())
// console.log(commerciante.getTasseIrpef())
// console.log(commerciante.getredditoAnnuoNetto())
