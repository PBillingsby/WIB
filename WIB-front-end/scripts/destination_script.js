document.addEventListener('DOMContentLoaded', ()=>{
  event.preventDefault()
  document.getElementById('destinationButton').style.display = "block"
  document.getElementById('destination-form').style.display = "none"
})

function clearDiv() {
  event.preventDefault()
  document.getElementById('my-destinations').innerHTML = ""
}

function destinationsFetch() { // fetch destinations from index to display on mouseover
  clearDiv()
  fetch('http://localhost:3000/destinations')
  .then(resp => resp.json())
  .then(destinationObject => {
    for (const destination in destinationObject.data) {
      let destinationAttributes = destinationObject.data[destination].attributes
      destinationCard(destinationAttributes)
    }
  })
}
function tripsFetch() { // fetch trips from index to display on mouseover
  clearDiv()
  fetch('http://localhost:3000/trips')
  .then(resp => resp.json())
  .then(tripObject => makeTrips(tripObject))
}
function makeTrips(obj) {
  for (const trip in obj.data) {
    let tripAttributes = obj.data[trip].attributes
    tripCard(tripAttributes)
  }
}
function destinationCard(attributes) { // creates destination cards
  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card', 'mx-auto')
  cardDiv.style.width = "15rem"
  cardDiv.innerHTML = `<div class="card-body"><img src="${attributes.img_url}" class="card-img-top img-thumbnail"><h5 class="card-title">${attributes.address}</h5><p><strong>City:</strong> ${attributes.city} <p><strong>Country:</strong> ${attributes.country}</p></div>`
  document.getElementById('my-destinations').append(cardDiv)
}

function tripCard(attributes) { // creates trip cards
  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card', 'mx-auto')
  cardDiv.style.width = "15rem"
  cardDiv.innerHTML = `<img class="card-img-top" src="https://canyoncreekhomeowners.com/wp-content/uploads/2019/01/image-placeholder-small.jpg"><div class="card-body"><h5 class="card-title">${attributes.occasion}</h5><p><strong>Destination:</strong> ${attributes.destination.city}, ${attributes.destination.country}</p></div>`
  document.getElementById('my-destinations').append(cardDiv)
}

function addDestination() { // removes button from DOM to display new destination form
  document.getElementById('destinationButton').style.display = "none"
  document.getElementById('destination-form').style.display = "block"
}

function handleNewDestination() {
  let newDestination = {
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    country: document.getElementById('country').value,
    trips_attributes: {
      occasion: document.getElementById('occasion').value,
    }
  }
  fetch('http://localhost:3000/destinations', {
    method: 'post',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(newDestination)
  })
  .then(resp => resp.json())
  // document.getElementById('destinations').style.display = "none"
}

