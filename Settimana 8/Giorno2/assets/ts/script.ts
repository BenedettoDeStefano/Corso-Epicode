console.log('---------- Conto 1 (SonAccount) ----------')


class SonAccount{
    Cliente:string;

    balanceInit: number=0;

    constructor(_cliente: string){
        this.Cliente = _cliente;
        
    }

    oneDeposit(versamento:number) {
       return `Hai versato ${versamento}€ Il tuo saldo attuale è ${this.balanceInit += versamento}€;` 
    }

    
    oneWithDraw(prelievo:number) {
        return `Hai prelevato ${prelievo}€ Il tuo saldo attuale è ${this.balanceInit -= prelievo}€;` 
    }

    twoDeposit(versamento2:number) {
        return `Hai versato altri ${versamento2}€ il tuo saldo attuale è ${this.balanceInit += versamento2} €;`
    }

    twoWithDraw(prelievo2:number) {
        return `Hai prelevato altri ${prelievo2}€ Il tuo saldo attuale è ${this.balanceInit -= prelievo2}€;` 
    }

}

const Cliente1 = new SonAccount('Cliente1')
console.log(Cliente1.oneDeposit(100))
console.log(Cliente1.oneWithDraw(100))
console.log(Cliente1.twoDeposit(200))
console.log(Cliente1.twoWithDraw(100))


console.log('---------- Conto2 (MotherAccount)----------')

class MotherAccount extends SonAccount {
    constructor(_cliente:string){
        super(_cliente)
    }

    oneDeposit(versamento:number) {
        return `Hai versato ${versamento}€ Il tuo saldo attuale è ${this.balanceInit += versamento}€;` 
     }

     oneWithDraw(prelievo:number) {
        return `Hai prelevato ${prelievo}€ Il tuo saldo attuale è ${this.balanceInit -= prelievo}€;` 
    }

    twoDeposit(versamento2:number) {
        return `Hai versato altri ${versamento2}€ il tuo saldo attuale è ${this.balanceInit += versamento2} €;`
    }

    twoWithDraw(prelievo2:number) {
        return `Hai prelevato altri ${prelievo2}€ Il tuo saldo attuale è ${this.balanceInit -= prelievo2}€;` 
    }

    addInterest():string {
        return `hai sul tuo conto ${this.balanceInit}€ ma hai maturato interessi del 10%, quindi il tuo saldo è ${this.balanceInit + this.balanceInit * 0.1 }€`
    }
}

const Cliente2 = new MotherAccount ('Cliente2')
console.log(Cliente2.oneDeposit(100))
console.log(Cliente2.oneWithDraw(100))
console.log(Cliente2.twoDeposit(200))
console.log(Cliente2.twoWithDraw(100))
console.log (Cliente2.addInterest())





// --------------------------------------------------Metodo2


// abstract class contoCorrente {
//     Cliente: string;
    
//     balanceInit: number=0;

//     constructor(_cliente: string){
//         this.Cliente = _cliente;
// }

// oneDeposit(versamento:number) {
//     return `Hai versato ${versamento}€ Il tuo saldo attuale è ${this.balanceInit += versamento}€;` 
//  }

// oneWithDraw(prelievo:number) {
//     return `Hai prelevato ${prelievo}€ Il tuo saldo attuale è ${this.balanceInit -= prelievo}€;` 
// }

// twoDeposit(versamento2:number) {
//     return `Hai versato altri ${versamento2}€ il tuo saldo attuale è ${this.balanceInit += versamento2} €;`
// }

// twoWithDraw(prelievo2:number) {
//     return `Hai prelevato altri ${prelievo2}€ Il tuo saldo attuale è ${this.balanceInit -= prelievo2}€;` 
// }

// }


// class MotherAccount extends contoCorrente{
//     constructor(_cliente:string){
//         super(_cliente);
//     }

//     addInterest():string {
//         return `hai sul tuo conto ${this.balanceInit}€ ma hai maturato interessi del 10%, quindi il tuo saldo è ${this.balanceInit + this.balanceInit * 0.1 }€`
//     }
// }

// const Cliente1 = new MotherAccount('Cliente1')
// console.log(Cliente1.oneDeposit(100))
// console.log(Cliente1.oneWithDraw(100))
// console.log(Cliente1.twoDeposit(200))
// console.log(Cliente1.twoWithDraw(100))
// console.log (Cliente1.addInterest())


// class SonAccount extends contoCorrente{
//     constructor(_cliente:string){
//         super(_cliente);
//     }

    
// }

// const Cliente2 = new SonAccount('Cliente1')
// console.log(Cliente2.oneDeposit(100))
// console.log(Cliente2.oneWithDraw(100))
// console.log(Cliente2.twoDeposit(200))
// console.log(Cliente2.twoWithDraw(100))