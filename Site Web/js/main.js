const { db } = require('../../API/db/db');
const getFournisseurs = require('../../API/routing/routing');
const app = require('../../API/app')

// db.query(queryFournisseur, (err,rows) => {
//     if(err) throw err;
//     console.log('Data received from Db:\n');
//     console.log(rows);

//     rows.forEach( (row) => {
//         console.log(`${row.name}, ${row.address}, ${row.email}, ${row.description},`);
//     });
// });

window.onload = function fournisseurListeTemplate(getFournisseurs) {
    return `
    <div class="list-card">
        <div class="list-card-line1">
            <p class="list-name">${name}</p>
            <p>${email}</p>
            <p>${phone_number}</p>
            <a href="#">
                <i class="material-icons pen">edit</i>
            </a>
        </div>
        <div class="list-card-line2">
            <p>${address}</p>
        </div>
        <div class="list-card-line3">
            <p>${description}</p>
            <a href="#">
                <i class="material-icons bin">delete</i>
            </a>
        </div>
    </div>
    `;
}

document.getElementById("list-cards").innerHTML = `
  ${queryFournisseur.map(fournisseurListeTemplate).join("")}
`;

