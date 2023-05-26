interface Smartphone {
    carica: number;
    numeroChiamate: number;

    ricarica(ricaricaCell: number): void,
    chiamata(minutiDurata: number): void,
    numero404(): number,
    getNumeroChiamate(): number,
    azzeraChiamate(): void,
}


class User implements Smartphone {

    carica: number;
    numeroChiamate: number;

    constructor(_carica: number, _numeroChiamate: number) {

        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }

    public ricarica(ricaricaCell: number): void {
        this.carica += ricaricaCell;
    }

    public chiamata(minutiDurata: number): void {
        if (minutiDurata > this.carica) {
            console.log("Carica insufficiente per continuare la chiamata")
        }
        this.carica -= minutiDurata * 0.20;
        this.numeroChiamate++;

    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

console.log("-----FirstUser-----")
const FirstUser = new User(20, 50)
FirstUser.ricarica(80)
FirstUser.chiamata(5)
console.log(`Credito residuo: ${FirstUser.numero404()}`)
console.log(`Numero chiamate:${FirstUser.getNumeroChiamate()}`)
FirstUser.azzeraChiamate()
console.log(`Chiamate azzerate:${FirstUser.getNumeroChiamate()}`)

console.log("-----SecondUser-----")
const SecondUser = new User(50, 50)
SecondUser.ricarica(80)
SecondUser.chiamata(5)
console.log(`Credito residuo: ${SecondUser.numero404()}`)
console.log(`Numero chiamate:${SecondUser.getNumeroChiamate()}`)
SecondUser.azzeraChiamate()
console.log(`Chiamate azzerate:${SecondUser.getNumeroChiamate()}`)

console.log("-----Third User-----")
const ThirdUser = new User(1, 100)
ThirdUser.ricarica(1)
ThirdUser.chiamata(190)
console.log(`Credito residuo: ${ThirdUser.numero404()}`)
console.log(`Numero chiamate:${ThirdUser.getNumeroChiamate()}`)
ThirdUser.azzeraChiamate()
console.log(`Chiamate azzerate:${ThirdUser.getNumeroChiamate()}`)





const btnMostra = document.getElementById('mostra') as HTMLElement;
const riga= document.getElementById('riga') as HTMLElement | null;

function mostra() : void{
    riga!.innerHTML += `
    <div class="d-flex flex-column">
    <div class="d-flex">
     <div class="card  mb-3 shadow card_generated" style="max-width: 18rem;">
    <div class="card-header bg-transparent ">Utente1</div>
    <div class="card-body ">
      <h4>Credito residuo: ${FirstUser.numero404()} €</h4>
    </div>
    <div class="card-footer bg-transparent text-danger">Vodafone</div>
  </div>

  <div class="card  mb-3 ms-4 shadow card_generated" style="max-width: 18rem;">
    <div class="card-header bg-transparent ">Utente2</div>
    <div class="card-body">
      <h4>Credito residuo: ${SecondUser.numero404()} €</h4>

    </div>
    <div class="card-footer bg-transparent text-warning">Wind3</div>
  </div>

  <div class="card  mb-3 ms-4 shadow card_generated" style="max-width: 18rem;">
    <div class="card-header bg-transparent ">Utente3</div>
    <div class="card-body ">
      <h4>Credito residuo: ${ThirdUser.numero404()} €</h4>
    </div>
    <div class="card-footer bg-transparent text-primary">Tim</div>
  </div>
    </div>
    <div>
    <p id="warning"> *Per ulteriori informazioni apri la console</p>
    </div>
   </div>
`
}



 