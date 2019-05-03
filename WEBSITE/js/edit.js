let originName = null;

function editProvider(obj) {

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


    const container = document.createElement('div')
    container.setAttribute('class', 'list-card')

    const form = document.createElement('form')
    form.setAttribute('class', 'edit-form')
    form.setAttribute('method', 'PUT')
    form.setAttribute('action', `https://viabrico-api.herokuapp.com/providers/${originName}`)

    const line1 = document.createElement('div')
    line1.setAttribute('class', 'list-card-line1')

    const input1 = document.createElement('input')
    input1.setAttribute('class', 'edit-name')
    input1.setAttribute('type', 'text')
    input1.setAttribute('id', 'name')
    input1.setAttribute('placeholder', 'Nom')
    input1.setAttribute('value', originName);

    const input2 = document.createElement('input')
    input2.setAttribute('class', 'edit-email')
    input2.setAttribute('type', 'email')
    input2.setAttribute('id', 'email')
    input2.setAttribute('placeholder', 'Email')
    input2.setAttribute('value', originEmail);

    const input3 = document.createElement('input')
    input3.setAttribute('class', 'edit-phone')
    input3.setAttribute('type', 'text')
    input3.setAttribute('id', 'phone-number')
    input3.setAttribute('placeholder', 'Téléphone')
    input3.setAttribute('value', originPhone);

    const button = document.createElement('button')
    button.setAttribute('class', '')
    button.setAttribute('type', 'submit')
    //button.setAttribute('onClick', 'sendEdit()')
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
    container.appendChild(form)
    form.appendChild(line1)
    line1.appendChild(input1)
    line1.appendChild(input2)
    line1.appendChild(input3)
    line1.appendChild(button)
    form.appendChild(line2)
    line2.appendChild(input4)
    form.appendChild(line3)
    line3.appendChild(input5)

}


// function sendEdit() {


//     // Collect data from the form
//     let name = document.getElementById("name").innerText;
//     let email = document.getElementById("email").innerText;
//     let phone_number = document.getElementById("phone-number").innerText;
//     let address = document.getElementById("address").innerText;
//     let description = document.getElementById("description").innerText;



//     const urlEditProvider = `https://viabrico-api.herokuapp.com/providers/${originName}`;
//     let request = new XMLHttpRequest();
//     request.open('PUT', urlEditProvider, true);
//     request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
//     request.send(JSON.stringify(name, email, phone_number, address, description));
//     // Status
//     console.log(request.readyState);
// }