/* Esercizio 1 */ 

class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName 
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    confontoEta(utente) {
        if (this.age > utente.age){
            return (`${this.firstName} è più vecchio di ${utente.firstName}`)
        }else if (this.age < utente.age) {
            return (`${this.firstName} è più giovane di ${utente.firstName}`)
        }else {
            return (`${this.firstName} ha la stessa età di ${utente.firstName}`)
        }
    }
};

const utente1 = new User("Giovanni", "Esposito", 20, "Napoli")
const utente2 = new User ("Francesco", "Landolfo", 40, "Firenze")
const utente3 = new User ("Luca", "Graziano", 40, "Milano")

console.log(utente1.confontoEta(utente2))
console.log(utente2.confontoEta(utente1))
console.log(utente2.confontoEta(utente3))






/* Esercizio 2 */


class Pet{
    constructor (_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
    }

stessoPadrone(animale) {
    if (this.ownerName === animale.ownerName){
        return ('true')
    } else {
        return ('false')
    }
}
}

class Animali {
    constructor (){
        this.arrayAnimali = [];
    }
}


/*
const form = document.getElementById('Form')
const listaAnimali = document.getElementById('animaliLista')
const animali = new Animali()

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    const addPet = new Pet(petName, ownerName, species, breed);
}) */