// We collect the div Id that will contain the providers
const app = document.getElementById('list-cards')

// Use the get function from the api
const request = new XMLHttpRequest()
request.open('GET', 'https://viabrico-api.herokuapp.com/fournisseurs/', true)
request.onload = function () {
    // Begin accessing JSON data here
    const data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        // For each provider in the db, we create the html
        data.forEach(provider => {

            const container = document.createElement('div')
            container.setAttribute('class', 'list-card')

            const line1 = document.createElement('div')
            line1.setAttribute('class', 'list-card-line1')

            const p1 = document.createElement('p')
            p1.setAttribute('class', 'list-name')
            p1.textContent = provider.name

            const p2 = document.createElement('p')
            p2.setAttribute('class', 'list-email')
            p2.textContent = provider.email

            const p3 = document.createElement('p')
            p3.setAttribute('class', 'list-phone')
            p3.textContent = provider.phone_number

            const a1 = document.createElement('a')
            a1.setAttribute('href', '#Edit')

            const i1 = document.createElement('i')
            i1.setAttribute('class', 'material-icons pen')
            i1.setAttribute('onClick', 'editProvider(this)')
            i1.textContent = 'edit'

            const line2 = document.createElement('div')
            line2.setAttribute('class', 'list-card-line2')

            const p4 = document.createElement('p')
            p4.setAttribute('class', 'list-address')
            p4.textContent = provider.address

            const line3 = document.createElement('div')
            line3.setAttribute('class', 'list-card-line3')

            const p5 = document.createElement('p')
            p5.textContent = provider.description

            const a2 = document.createElement('a')
            a2.setAttribute('href', '#Delete')

            const i2 = document.createElement('i')
            i2.setAttribute('class', 'material-icons bin')
            i2.setAttribute('onClick', 'deleteCard(this)')
            i2.textContent = 'delete'


            app.appendChild(container)
            container.appendChild(line1)
            line1.appendChild(p1)
            line1.appendChild(p2)
            line1.appendChild(p3)
            line1.appendChild(a1)
            a1.appendChild(i1)
            container.appendChild(line2)
            line2.appendChild(p4)
            container.appendChild(line3)
            line3.appendChild(p5)
            line3.appendChild(a2)
            a2.appendChild(i2)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()