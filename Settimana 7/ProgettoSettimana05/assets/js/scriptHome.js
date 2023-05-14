//Pagina home


const riga = document.getElementById('riga')
const url = "https://striveschool-api.herokuapp.com/api/product"

//Richiesta Get con popolamento cards
window.onload = () => {
    async function cards() {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDFhZTg4Zjc0MDAwMTQyODc0NzEiLCJpYXQiOjE2ODM4ODI0MTQsImV4cCI6MTY4NTA5MjAxNH0.cExNEK-meKjDpCpXEHq9hV9xn42H5brihueF97wNzkQ",
                }
            }
            )
            if (!response.ok) {
                throw new Error(`${response.status}`)
            }
            const prodotti = await response.json();
            console.log(prodotti[0])

            for (let i = 0; i < prodotti.length; i++) {
                riga.innerHTML += `<div class="col-6 col-md-4 col-lg-3 mb-4 colonna"><div class="card h-100">
        <img src="${prodotti[i].imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${prodotti[i].name}</h5>
          <p class="card-text">${prodotti[i].brand}</p>
          <p class="card-text">${prodotti[i].description}</p>
          <p class="card-text">${prodotti[i].price}</p>
          <div class="d-flex flex-column">
          <a class="btn btn-primary mb-1" href="indexBACK.html?id=${prodotti[i]._id}">Modifica</a>
          <a id="btnInfo" class="btn btn-success mb-1" href="indexDETAILS.html?id=${prodotti[i]._id}">info</a>
          </div>
        </div>
      </div></div>`
            }
        } catch (errore) {
            console.log('Error with async/await:', errore.message);
        }
    }
    cards()
}

