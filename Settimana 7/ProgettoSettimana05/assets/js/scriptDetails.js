const idProdotto = new URLSearchParams(location.search).get('id');
const url = "https://striveschool-api.herokuapp.com/api/product/"
const riga = document.getElementById('riga')


    async function cardsDetails(){
        
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
        
            const prodotti = await response.json();
            console.log(prodotti.name)

         riga.innerHTML='';

         
        riga.innerHTML += `<div class="col-6 col-md-4 col-lg-3 mb-4 colonna"><div class="card h-100">
        <img src="${prodotti.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">      
          <h5 class="card-title">${prodotti.name}</h5>
          <p class="card-text">${prodotti.brand}</p>
          <p class="card-text">${prodotti.description}</p>
          <p class="card-text">${prodotti.price}</p>
          <div class="d-flex flex-column">
          <a class="btn btn-danger mb-1" href="indexHome.html">torna indietro</a>
          <a class="btn btn-success mb-1" href="indexBACK.html?id=${prodotti._id}">modifica</a>
          </div>
        </div>
      </div></div>`
        }
     catch (errore) {
        console.log('Error with async/await:', errore.message);
    }
    
}


window.onload = () => {
    cardsDetails();
}