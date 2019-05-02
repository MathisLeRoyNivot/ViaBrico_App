import sha256 from 'crypto-js/sha256';
const login=document.getElementById("login");
const password=document.getElementById("password");

function connexion (){
    const request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:3000/users', true)
    request.onload = function () {
        const data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            data.forEach(user => { 
                var root = "root";
                var hash = CryptoJS.HmacSHA256(root, "");
                var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
                document.getElementById('output').innerHTML = hashInBase64;
                if(login.value == user.login && password.value == user.password){
                    window.location.href = "./pages/list.html";
                    console.log("success")
                }
                else{
                    console.log("erreur")
                }
            })
        } else {
            console.log("erreur2")
        }
    }
    request.send()
}



