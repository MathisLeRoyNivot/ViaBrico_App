
const app = document.getElementById('list-cards')

const container = document.createElement('div')
container.setAttribute('class', 'list-card')

app.appendChild(container)

const request = new XMLHttpRequest()
request.open('GET', 'http://localhost:3000/fournisseurs', true)
request.onload = function() {
  // Begin accessing JSON data here
  const data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(fournisseur => {
      const card = document.createElement('div')
      card.setAttribute('class', 'list-card-line1')

      const p1 = document.createElement('p')
      p1.setAttribute('class', 'list-name')
      p1.textContent = fournisseur.name

      const p2 = document.createElement('p')
      p2.setAttribute('class', 'list-email')
      p2.textContent = fournisseur.email

      const p3 = document.createElement('p')
      p3.setAttribute('class', 'list-phone')
      p3.textContent = fournisseur.phone_number

      const a1 = document.createElement('a')
      a1.setAttribute('href', '#')
      

      container.appendChild(card)
      card.appendChild(p1)
      card.appendChild(p2)
      card.appendChild(p3)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()