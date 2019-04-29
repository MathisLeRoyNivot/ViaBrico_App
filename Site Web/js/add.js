let name = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let address = document.getElementById("address");
let description = document.getElementById("description");

function addForm() {
    const urlPost = "http://localhost:3000/fournisseurs";

    console.log("Name : " + name.value + "\nEmail : " + email.value + "\nPhone : " + phoneNumber.value + "\nAddress : " + address.value + "\nDescription : " + description.value);

    axios({
        method: 'post',
        url: urlPost,
        data: {
            name: name.value,
            email: email.value,
            phone_number: phoneNumber.value,
            address: address.value,
            description: description.value
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}