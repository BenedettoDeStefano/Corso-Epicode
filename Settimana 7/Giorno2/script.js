/*esercizio 01 */

let person = []

const namePerson = document.getElementById('name')
const surnamePerson = document.getElementById('surname')

const salva = document.getElementById('save')
const elimina = document.getElementById('delete')

salva.addEventListener('click', function (event) {
    event.preventDefault()
    const nuovoUtente = {
        nome: namePerson.value,
        cognome: surnamePerson.value,
      }
      person.push(nuovoUtente)

      const personToString = JSON.stringify(person)
      localStorage.setItem('persona', personToString)

      namePerson.value = ''
      surnamePerson.value = ''
      popolaLista()
})


elimina.addEventListener('click', function () {
    localStorage.removeItem('persona')

  })


const popolaLista = function () {
    let lista = document.querySelector('ul')
    lista.innerHTML = ''

    person.forEach((e) => {
      const newLista = document.createElement('li')
      newLista.innerText = 'Nome = ' + e.nome + ' Cognome = ' + e.cognome 
      lista.appendChild(newLista)
    })
  }