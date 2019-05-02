// Collect data from the form
let name = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let address = document.getElementById("address");
let description = document.getElementById("description");


function editProvider(obj) {

    const originName = obj.parentNode.parentNode.parentNode.firstChild.firstChild.innerText;

    // Delete all childs from the parent div
    const reference = obj.parentNode.parentNode.parentNode;
    while (reference.firstChild) {
        reference.removeChild(reference.firstChild);
    }

    const container = document.createElement('div')
    container.setAttribute('class', 'list-card')

    const line1 = document.createElement('div')
    line1.setAttribute('class', 'list-card-line1')

    const input1 = document.createElement('input')
    input1.setAttribute('class', 'list-name')
    input1.setAttribute('type', 'text')
    input1.setAttribute('value', originName);

    // const input2 = document.createElement('input')
    // input2.setAttribute('class', 'list-email')
    // input2.textContent = provider.email

    // const input3 = document.createElement('input')
    // input3.setAttribute('class', 'list-phone')
    // input3.textContent = provider.phone_number

    // const button = document.createElement('button')
    // button.setAttribute('class', '')
    // button.textContent = 'Valider'

    // const line2 = document.createElement('div')
    // line2.setAttribute('class', 'list-card-line2')

    // const input4 = document.createElement('input')
    // input4.setAttribute('class', 'list-address')
    // input4.textContent = provider.address

    // const line3 = document.createElement('div')
    // line3.setAttribute('class', 'list-card-line3')

    // const input5 = document.createElement('input')
    // input5.textContent = provider.description


    app.appendChild(container)
    container.appendChild(line1)
    line1.appendChild(input1)
    // line1.appendChild(input2)
    // line1.appendChild(input3)
    // line1.appendChild(button)
    // container.appendChild(line2)
    // line2.appendChild(input4)
    // container.appendChild(line3)
    // line3.appendChild(input5)

    // // New JSON Provider
    // const jsonNewProvider = {
    //     "name": name.value,
    //     "email": email.value,
    //     "phone_number": phoneNumber.value,
    //     "address": address.value,
    //     "description": description.value
    // };



    // const urlEditProvider = `http://localhost:3000/fournisseurs/${name}`;
    // let request = new XMLHttpRequest();
    // request.open('PUT', urlEditProvider, true);
    // request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    // request.send(JSON.stringify(jsonNewProvider));
    // // Status
    // console.log(request.readyState);
}