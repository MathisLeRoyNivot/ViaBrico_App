function deleteCard(obj) {

    // We collect the provider's name contained in the same container that the button
    const reference = obj.parentNode.parentNode.parentNode.firstChild.firstChild;
    const name = reference.innerText || reference.textContent;

    // Use the delete function from the api
    const request = new XMLHttpRequest()
    request.open('DELETE', `http://localhost:3000/providers/${name}`, true)
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Reload the page after the delete
            document.location.reload(true);
        }
        else {
            console.log("Erreur");
        }
    }
    request.send()
}