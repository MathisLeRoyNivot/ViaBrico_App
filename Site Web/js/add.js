// Récupération des données dans les inputs du formulaire 
let name = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let address = document.getElementById("address");
let description = document.getElementById("description");

function addForm() {

    // Objet JSON pour un nouveau fournisseur
    const jsonNewProvider = {
        "name": name.value, 
        "email": email.value, 
        "phone_number": phoneNumber.value, 
        "address": address.value, 
        "description": description.value 
    };

    // console.log(jsonNewProvider);

    const urlPostProvider = 'http://localhost:3000/fournisseurs'; 
    let request = new XMLHttpRequest();
    request.open('POST', urlPostProvider, true);
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify(jsonNewProvider));
    // Statut
    console.log(request.readyState);

    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:3000/fournisseurs",
    //     // The key needs to match your method's input parameter (case-sensitive).
    //     data: jsonNewProvider,
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     success: function(data){alert(data);},
    //     failure: function(errMsg) {
    //         alert(errMsg);
    //     }
    // });

    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:3000/fournisseurs",
    //     crossDomain: true, 
    //     dataType: "json",
    //     data: jsonNewProvider
    // }).done(function ( data ) {
    //         alert("Ajax callback response : " + JSON.stringify(data));
    // });
}