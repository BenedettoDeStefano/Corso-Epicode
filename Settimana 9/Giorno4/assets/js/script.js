"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Abbigliamento {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    getSaldoCapo() {
        return this.prezzoivainclusa * this.saldo / 100;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
function prodotti() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./starter/Abbigliamento.json", {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            const capi = yield response.json();
            console.log(capi);
            for (let i = 0; i < capi.length; i++) {
                const capoAbbigliamento = new Abbigliamento(capi[i].id, capi[i].codprod, capi[i].collezione, capi[i].capo, capi[i].modello, capi[i].quantita, capi[i].colore, capi[i].prezzoivaesclusa, capi[i].prezzoivainclusa, capi[i].disponibile, capi[i].saldo);
                console.log(capoAbbigliamento);
                console.log(capoAbbigliamento.getAcquistoCapo());
                console.log(capoAbbigliamento.getSaldoCapo());
            }
        }
        catch (error) {
            console.log('Error with async/await:', error.message);
        }
    });
}
prodotti();
