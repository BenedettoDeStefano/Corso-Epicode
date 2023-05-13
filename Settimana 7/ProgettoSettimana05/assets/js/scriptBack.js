


const btnCrea = document.getElementById('crea')

btnCrea.addEventListener('click', (event) => {
    event.preventDefault();
    articolo()
})


async function articolo() {

    const prName = document.getElementById('name').value
    const prDescription = document.getElementById('description').value
    const prBrand = document.getElementById('brand').value
    const prImg = document.getElementById('imageUrl').value
    const prPrice = document.getElementById('price').value
    const url = "https://striveschool-api.herokuapp.com/api/product"


    const singleProduct = {
        name: prName,
        description: prDescription,
        brand: prBrand,
        imageUrl: prImg,
        price: prPrice
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDFhZTg4Zjc0MDAwMTQyODc0NzEiLCJpYXQiOjE2ODM4ODI0MTQsImV4cCI6MTY4NTA5MjAxNH0.cExNEK-meKjDpCpXEHq9hV9xn42H5brihueF97wNzkQ",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(singleProduct)
        });


        if (response.ok) {
            const data = await response.json();
            alert('Elemento creato')
            console.log(data)

        } else {
            console.log(response.status);
        }
    } catch (errore) {
        console.log('Error with async/await:', errore.message);
    }

}

// ---------------------------------------------------------- //

const idProdotto = new URLSearchParams(location.search).get('id');
const url = "https://striveschool-api.herokuapp.com/api/product/"



async function idGet() {

    const prName = document.getElementById('name')
    const prDescription = document.getElementById('description')
    const prBrand = document.getElementById('brand')
    const prImg = document.getElementById('imageUrl')
    const prPrice = document.getElementById('price')

    try {
        const response = await fetch(`${url}${idProdotto}`, {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDFhZTg4Zjc0MDAwMTQyODc0NzEiLCJpYXQiOjE2ODM4ODI0MTQsImV4cCI6MTY4NTA5MjAxNH0.cExNEK-meKjDpCpXEHq9hV9xn42H5brihueF97wNzkQ",

            }
        }
        )

        if (!response.ok) {
            throw new Error(`${response.status}`)
        } 

        const ripopola = await response.json()
        console.log(ripopola)


        prName.value = ripopola.name
        prDescription.value = ripopola.description
        prBrand.value = ripopola.brand
        prImg.value = ripopola.imageUrl
        prPrice.value = ripopola.price


    } catch (errore) {
        console.log('Error with async/await:', errore.message);
    }
}

// ---------------------------------------------------------- //

const btnModifica = document.getElementById('modifica')
btnModifica.addEventListener('click', (event) => {
    event.preventDefault()
    var conferma = confirm('sicuro sicuro?')
    if (conferma){
   return modificaProd(),
   alert('Elemento Modificato')
    }
})


window.onload = () => {
    if (idProdotto) {
        btnCrea.style.display = 'none';
        idGet()
    }
}

async function modificaProd() {
    try {

        const prName = document.getElementById('name').value
        const prDescription = document.getElementById('description').value
        const prBrand = document.getElementById('brand').value
        const prImg = document.getElementById('imageUrl').value
        const prPrice = document.getElementById('price').value

        const singleProduct = {
            name: prName,
            description: prDescription,
            brand: prBrand,
            imageUrl: prImg,
            price: prPrice
        }

        const response = await fetch(`${url}${idProdotto}`, {
            method: "PUT",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDFhZTg4Zjc0MDAwMTQyODc0NzEiLCJpYXQiOjE2ODM4ODI0MTQsImV4cCI6MTY4NTA5MjAxNH0.cExNEK-meKjDpCpXEHq9hV9xn42H5brihueF97wNzkQ",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(singleProduct),
            
        }
        )
        if (!response.ok) {
            throw new Error(`${response.status}`)
        } else{
        console.log('modifica effettuata',)
        }
    } catch (errore) {
        console.log('Error with async/await:', errore.message);
    }
}

// ---------------------------------------------------------- //

    
const btnElimina = document.getElementById('delete')
btnElimina.addEventListener('click', (event) => {
    event.preventDefault()
    var conferma = confirm('sicuro sicuro?')
    if (conferma){
    return eliminaProd(),
    alert('Elemento Eliminato') 
}
})


    async function eliminaProd() {
        try {
    
            const response = await fetch(`${url}${idProdotto}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDFhZTg4Zjc0MDAwMTQyODc0NzEiLCJpYXQiOjE2ODM4ODI0MTQsImV4cCI6MTY4NTA5MjAxNH0.cExNEK-meKjDpCpXEHq9hV9xn42H5brihueF97wNzkQ"   
                }
            }
            )
            if (!response.ok) {
                throw new Error(`${response.status}`)
            } else {
                
                console.log('prodotto eliminato',)
            }
        } catch (errore) {
            console.log('Error with async/await:', errore.message);
        }
    }

    

    // ---------------------------------------------------------- //


    const btnReset = document.getElementById('resetBtn')
    btnReset.addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('registraArticolo').reset()
})


