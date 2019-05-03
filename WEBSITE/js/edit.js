let originName = null;

function editProvider(obj) {

    // Collect original data from the provider
    originName = obj.parentNode.parentNode.parentNode.firstChild.firstChild.innerText;
    const originEmail = obj.parentNode.parentNode.parentNode.firstChild.firstChild.nextSibling.innerText;
    const originPhone = obj.parentNode.parentNode.parentNode.firstChild.firstChild.nextSibling.nextSibling.innerText;
    const originAddress = obj.parentNode.parentNode.parentNode.firstChild.nextSibling.firstChild.innerText;
    const originDescription = obj.parentNode.parentNode.parentNode.lastChild.firstChild.innerText;

    // Delete all childs from the parent div
    const reference = obj.parentNode.parentNode.parentNode;
    while (reference.firstChild) {
        reference.removeChild(reference.firstChild);
    }
    reference.parentNode.removeChild(reference);

    // Create inputs instead of p with the original data
    const container = document.createElement('div')
    container.setAttribute('class', 'list-card')

    const line1 = document.createElement('div')
    line1.setAttribute('class', 'list-card-line1')

    const p = document.createElement('p')
    p.setAttribute('class', 'edit-name')
    p.textContent = originName;

    const input2 = document.createElement('input')
    input2.setAttribute('class', 'edit-email')
    input2.setAttribute('type', 'email')
    input2.setAttribute('id', 'email')
    input2.setAttribute('placeholder', 'Email')
    input2.setAttribute('value', originEmail);

    const input3 = document.createElement('input')
    input3.setAttribute('class', 'edit-phone')
    input3.setAttribute('type', 'text')
    input3.setAttribute('id', 'phone_number')
    input3.setAttribute('placeholder', 'Téléphone')
    input3.setAttribute('value', originPhone);

    const button = document.createElement('button')
    button.setAttribute('class', '')
    button.setAttribute('onClick', 'sendEdit()')
    button.textContent = 'Valider'

    const line2 = document.createElement('div')
    line2.setAttribute('class', 'list-card-line2')

    const input4 = document.createElement('input')
    input4.setAttribute('class', 'edit-address')
    input4.setAttribute('type', 'text')
    input4.setAttribute('id', 'address')
    input4.setAttribute('placeholder', 'Adresse')
    input4.setAttribute('value', originAddress);

    const line3 = document.createElement('div')
    line3.setAttribute('class', 'list-card-line3')

    const input5 = document.createElement('textarea')
    input5.setAttribute('class', 'edit-description')
    input5.setAttribute('type', 'text')
    input5.setAttribute('id', 'description')
    input5.setAttribute('placeholder', 'Description')
    input5.textContent = originDescription;

    app.appendChild(container)
    container.appendChild(line1)
    line1.appendChild(p)
    line1.appendChild(input2)
    line1.appendChild(input3)
    line1.appendChild(button)
    container.appendChild(line2)
    line2.appendChild(input4)
    container.appendChild(line3)
    line3.appendChild(input5)
}


function sendEdit() {

    // Collect new data from the form
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("phone_number").value;
    const address = document.getElementById("address").value;
    const description = document.getElementById("description").value;

    // Use the api put request
    const urlEditProvider = `https://viabrico-api.herokuapp.com/providers/${originName}`;
    let request = new XMLHttpRequest();
    request.open('PUT', urlEditProvider, true);
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify({ "name": originName, "email": email, "phone_number": phone_number, "address": address, "description": description }));
    // Status
    console.log(request.readyState);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Reload the page after the edit done
            document.location.reload(true);
        }
        else {
            console.log("Erreur");
        }
    }
}