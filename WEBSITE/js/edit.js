// Collect data from the form
let name = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let address = document.getElementById("address");
let description = document.getElementById("description");


function editProvider(obj) {

    const originName = obj.parentNode.parentNode.parentNode.firstChild.firstChild.innerText;
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

    const line1 = document.createElement('div')
    line1.setAttribute('class', 'list-card-line1')

    const input1 = document.createElement('input')
    input1.setAttribute('class', '')
    input1.setAttribute('type', 'text')
    input1.setAttribute('value', originName);

    const input2 = document.createElement('input')
    input2.setAttribute('class', '')
    input2.setAttribute('type', 'text')
    input2.setAttribute('value', originEmail);

    const input3 = document.createElement('input')
    input3.setAttribute('class', '')
    input3.setAttribute('type', 'text')
    input3.setAttribute('value', originPhone);

    const button = document.createElement('button')
    button.setAttribute('class', '')
    button.textContent = 'Valider'

    const line2 = document.createElement('div')
    line2.setAttribute('class', 'list-card-line2')

    const input4 = document.createElement('input')
    input4.setAttribute('class', '')
    input4.setAttribute('type', 'text')
    input4.setAttribute('value', originAddress);

    const line3 = document.createElement('div')
    line3.setAttribute('class', 'list-card-line3')

    const input5 = document.createElement('textarea')
    input5.setAttribute('class', '')
    input5.setAttribute('type', 'text')
    input5.textContent = originDescription;


    <form class="add-form" method="POST" action="https://viabrico-api.herokuapp.com/fournisseurs/">
        <div class="add-name">
            <span class="input-group-addon"><i class="material-icons">person</i></span>
            <input type="text" id="name" name="name" placeholder="Nom" required/>
        </div>
        <div class="add-email">
            <span class="input-group-addon"><i class="material-icons">alternate_email</i></span>
            <input type="email" id="email" name="email" placeholder="Email" required/>
        </div >
        <div class="add-phone">
            <span class="input-group-addon"><i class="material-icons">phone</i></span>
            <input type="text" id="phone-number" name="phonenumber" placeholder="Téléphone" required />
        </div>
        <div class="add-address">
            <span class="input-group-addon"><i class="material-icons">place</i></span>
            <input type="text" id="address" name="address" placeholder="Adresse" required/>
        </div>
        <div class="add-description">
            <span class="input-group-addon"><i class="material-icons comment">comment</i></span>
            <textarea name="description" id="description" placeholder="Description" required></textarea>
        </div>
    </form>


    app.appendChild(container)
    container.appendChild(line1)
    line1.appendChild(input1)
    line1.appendChild(input2)
    line1.appendChild(input3)
    line1.appendChild(button)
    container.appendChild(line2)
    line2.appendChild(input4)
    container.appendChild(line3)
    line3.appendChild(input5)

    // // New JSON Provider
    // const jsonNewProvider = {
    //     "name": name.value,
    //     "email": email.value,
    //     "phone_number": phoneNumber.value,
    //     "address": address.value,
    //     "description": description.value
    // };



    // const urlEditProvider = `http://localhost:3000/providers/${name}`;
    // let request = new XMLHttpRequest();
    // request.open('PUT', urlEditProvider, true);
    // request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    // request.send(JSON.stringify(jsonNewProvider));
    // // Status
    // console.log(request.readyState);
}