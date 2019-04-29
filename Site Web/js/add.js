function addForm() {
    const urlPost = "http://localhost:3000/add";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let address = document.getElementById("address").value;
    let description = document.getElementById("description").value;

    
    axios.post(urlPost, {
        name: name,
        email: email,
        phone_number: phoneNumber,
        address: address,
        description: description
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
