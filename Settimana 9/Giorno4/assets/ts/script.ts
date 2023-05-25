class Abbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(_id: number, _codprod: number, _collezione: string, _capo: string, _modello: number, _quantita: number, _colore: string, _prezzoivaesclusa: number, _prezzoivainclusa: number, _disponibile: string, _saldo: number) {

        this.id = _id
        this.codprod = _codprod
        this.collezione = _collezione
        this.capo = _capo
        this.modello = _modello
        this.quantita = _quantita
        this.colore = _colore
        this.prezzoivaesclusa = _prezzoivaesclusa
        this.prezzoivainclusa = _prezzoivainclusa
        this.disponibile = _disponibile
        this.saldo = _saldo
    }

    getSaldoCapo(): number {
        return this.prezzoivainclusa * this.saldo / 100
    }

    getAcquistoCapo(): number {
        return this.prezzoivainclusa - this.getSaldoCapo()
    }
}




async function prodotti() {
    try {
        const response = await fetch("./starter/Abbigliamento.json", {
            method: "GET",
        })
        if (!response.ok) {
            throw new Error(`${response.status}`)
        }
        const capi = await response.json();
        console.log(capi)


        for (let i = 0; i < capi.length; i++) {

            const capoAbbigliamento = new Abbigliamento(
                capi[i].id,
                capi[i].codprod,
                capi[i].collezione,
                capi[i].capo,
                capi[i].modello,
                capi[i].quantita,
                capi[i].colore,
                capi[i].prezzoivaesclusa,
                capi[i].prezzoivainclusa,
                capi[i].disponibile,
                capi[i].saldo,
            )

        console.log(capoAbbigliamento)
        console.log(capoAbbigliamento.getAcquistoCapo())
        console.log(capoAbbigliamento.getSaldoCapo())

        }
    }

    catch (error: any) {
        console.log('Error with async/await:', error.message);
    }

}

prodotti()