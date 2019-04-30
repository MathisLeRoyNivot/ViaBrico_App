let name = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let address = document.getElementById("address");
let description = document.getElementById("description");

function addForm() {

    const jsonNewProvider = {
        "name": name.value, 
        "email": email.value, 
        "phone_number": phoneNumber.value, 
        "address": address.value, 
        "description": description.value 
    };

    console.log(jsonNewProvider);

    const urlPostProvider = 'http://localhost:3000/fournisseurs'; 
    let request = new XMLHttpRequest();
    request.open('POST', urlPostProvider, true);
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify(jsonNewProvider));
}